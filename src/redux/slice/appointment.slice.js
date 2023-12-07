import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db, storage } from "../../firebase/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";



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
                        
                        const docRef = await addDoc(collection(db, "appointment"), {...data, precption_No: rNo, precption: url, "file_name": data.precption.name});

                        idata = {id: docRef.id, ...data, precption_No: rNo, precption: url, "file_name": data.precption.name };
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

    }
})

export default appointmentSlice.reducer;