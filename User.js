import firebase from 'firebase/compat/app';

export const AddUser = async (email, uid) => {
    try {
        return await firebase.database().ref('users/' + uid).
        set({
            email: email,
        });
    } catch (error) {
        return error;
    }
}
