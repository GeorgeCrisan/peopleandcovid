import { myFirebase} from "../firebaseinit";

//Constants

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const CREATEUSER_REQUEST = "CREATEUSER_REQUEST";
export const CREATEUSER_SUCCESS = "CREATEUSER_SUCCESS";
export const CREATEUSER_ERROR = "CREATEUSER_ERROR";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const REQUEST_PASS_SUCCESS = 'REQUEST_PASS_SUCCESS';
export const REQUEST_PASS_FAIL = 'REQUEST_PASS_FAIL';
export const REQUEST_PASS_START = 'REQUEST_PASS_START';

export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';

//Raw Actions
const updateUser = (user:any) => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

const errorUpdateUser = (err: Error) => {
  return {
    type: UPDATE_USER_ERROR,
    error: err
  };
};

const requestCreateUser = () => {
  return {
    type: CREATEUSER_REQUEST
  };
};

const successCreateUser = () => {
  return {
    type: CREATEUSER_SUCCESS
  };
};

const errorCreateUser = (err: Error) => {
  return {
    type: CREATEUSER_ERROR,
    error: err
  };
};

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const successLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

const errorLogin = (err: Error) => {
  return {
    type: LOGIN_FAILURE,
    error: err
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const successLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
const errorLogout = (err: Error) => {
  return {
    type: LOGOUT_FAILURE,
    error: err
  };
};
const successCheck = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

const requestCheck = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const passRequestStart = () => {
  return {
    type: REQUEST_PASS_START,
  };
};

const passRequestSuccess = () => {
  return {
    type: REQUEST_PASS_SUCCESS
  };
};

const passRequestFail = (err: Error) => {
  return {
    type: REQUEST_PASS_FAIL,
    error: err
  };
};

export const deleteSuccess = () => {
  return {
    type: DELETE_ACCOUNT_SUCCESS
  }
}

export const deleteFail = (error: Error) => {
  return {
    type: DELETE_ACCOUNT_FAIL,
    error: error
  }
}

//Thunks

export const deleteAccount = (password: 'string') => (dispatch: any) => {

  let user = myFirebase.auth().currentUser ?? {email: "", delete: () => {}};

  if(!user) {
    dispatch(deleteFail(new Error('User object is missing!')));
  }

  myFirebase
    .auth()
    .signInWithEmailAndPassword(user.email ?? '', password).then(() => {
      return user.delete();
    })
    .then(function () {
      dispatch(deleteSuccess());
    }).catch((error)=>{
      dispatch(deleteFail(error));
    });
}


export const passwordReset = (email: string) => (dispatch:any) => {
  dispatch(passRequestStart());
  myFirebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((data) => {
      dispatch(passRequestSuccess());
    })
    .catch((err: Error) => {
      dispatch(passRequestFail(err));
    });
};

export const createUser = (email: string, password: string, displayName: string) => (dispatch:any) => {
  dispatch(requestCreateUser());

  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      const { user } = data;
      if (user) {
        user.sendEmailVerification();

        user.updateProfile({
          displayName: displayName
        }).then((user) => {
          dispatch(updateUser(user));
        }).catch((err2) => {
          dispatch(errorUpdateUser(err2));
        });
      }
      dispatch(successCreateUser());
    })
    .catch((err: Error) => {
      dispatch(errorCreateUser(err));
    });
}

export const loginUser = (email: string, password: string) => (dispatch: any) => {
  dispatch(requestLogin());

  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(successLogin(user));
    })
    .catch((err: Error) => {
      dispatch(errorLogin(err));
    });
};

export const logoutUser = () => (dispatch: any) => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(successLogout());
    })
    .catch((err: Error) => {
      dispatch(errorLogout(err));
    });
}

export const verifyAuth = () => (dispatch: any) => {
  dispatch(requestCheck());

  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(successLogin(user));
      }
      dispatch(successCheck());
    })
};