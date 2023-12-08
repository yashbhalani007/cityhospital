import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db, storage } from "../../firebase/firebase";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";



const initialstate = {
    isLoading: false,
    apt: [],
    error: null
}

export const AddAptData = createAsyncThunk(

    'appoinment/add',
    async (data) => {
        let idata = { ...data };
        let rNo = Math.floor(Math.random() * 10000);
        try {

            const fileRef = ref(storage, 'prescription/' + rNo + '_' + data.precption.name);

            await uploadBytes(fileRef, data.precption).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);

                        const docRef = await addDoc(collection(db, "appointment"), { ...data, precption_Name: rNo + '_' + data.precption.name , precption: url});

                        idata = {
                            id: docRef.id,
                            ...data,
                            precption_Name: rNo + '_' + data.precption.name,
                            precption: url
                        };
                        console.log(docRef);
                    })

            });
            console.log(idata);
            return idata;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

)

export const GeteAptData = createAsyncThunk(
    'appoinment/get',
    async () => {
        let data = []

        const querySnapshot = await getDocs(collection(db, "appointment"));

        querySnapshot.forEach((doc) => {

            data.push({ id: doc.id, ...doc.data() })

            console.log(data);

            // dispatch({ type: GET_MEDICHINES, payload: data })

        });

        return data;
    }
)

export const DeleteAptData = createAsyncThunk(
    'appoinment/delete',
    async (data) => {

        console.log(data); 

        const desertRef = ref(storage, 'prescription/' + data.precption_Name);

        // Delete the file
        await deleteObject(desertRef).then(async () => {
            console.log(desertRef);

            await deleteDoc(doc(db, "appointment/", data.id));


        }).catch((error) => {
            console.log(error);
        });

        return data.id;
    }

)

export const EditAptData = createAsyncThunk(
    'appoinment/update',

    async (data) => {

    }
)

export const appointmentSlice = createSlice({
    name: 'appoinment',
    initialState: initialstate,
    extraReducers: (builder) => {
        builder.addCase(AddAptData.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.apt = state.apt.concat(action.payload);
            state.error = null;
        })
        builder.addCase(GeteAptData.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.apt = action.payload;
            state.error = null;
        })
        builder.addCase(DeleteAptData.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.apt = state.apt.filter((v) => v.id !== action.payload);
            state.error = null;
        })
        builder.addCase(EditAptData.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.apt = action.payload;
            state.error = null;
        })

    }
})

export default appointmentSlice.reducer;