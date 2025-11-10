import { auth, googleProvider, db } from "./FirebaseConfig";
import { signInWithPopup, signOut, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  try {
    
    const result = await signInWithPopup(auth, googleProvider);
    const uid = result.user.uid;

    const data = {
      name: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      phone: "",
      cep: "",
      state: "",
      city: "",
      terms: true,
      permissions: [],
      status: false,
      token: result.user.accessToken
    };

    const exists = await userExists(uid);

    if (!exists) {
      const saved = await saveUser(uid, data);
      return { user: saved.user };
    }

    // usuário já existe → pega completo
    const snap = await getDoc(doc(db, "users", uid));
    return { user: { uid, ...snap.data() } };

  } catch (error) {
    return { error };
  }
};




// Verifica se o usuário existe
export async function userExists(uid) {
  try {
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);

    return snapshot.exists(); 
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    return false;
  }
}



export const loginWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user };
  } catch (error) {
    return { error };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};


export const registerWithEmail = async (email, password, formData) => {
  try {
    // remove password apenas do objeto salvo no Firestore
    const { password: _, ...Data } = formData;

    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
      console.log(user);

    if (!user?.uid) {
      return { error: new Error("Não foi possível criar o usuário.") };
    }

  
    await saveUser(user.uid,  Data);
   

    return { user };
  } catch (error) {
    return { error };
  }
};


export async function saveUser(id, data) {
  try {
    const userRef = doc(db, "users", id);

    const userData = {
      ...data,
      createdAt: serverTimestamp(),
    };

    await setDoc(userRef, userData);

    return {
      success: true,
      user: { uid: id, ...userData } // agora retorna também o photoURL
    };

  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    return { success: false, error };
  }
}
