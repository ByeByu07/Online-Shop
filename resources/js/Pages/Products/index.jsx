import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/inertia-react';
import PromoteMenuItem from '../Components/PromoteMenuItem';
import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Modal, TextField, Typography } from '@mui/material';
import { Inertia } from '@inertiajs/inertia';

/**
 * Download data from the specified URL.
 *
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from.
 * @return {Promise<string>} The data from the URL.
 */

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:"70%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function Products(props) {

    const {data,setData,post,progress} = useForm({
        title:"",
        description:"",
        price:"",
        tag:"",
        image:null
    })

    const [addModal,setAddModal]=useState(false);

    const viewAddModal = () =>{
        setAddModal((add)=>!add);
    }

    const postCreateProduct = (e) => {
        try{
            e.preventDefault()
            post("/products/create",{
                onSuccess:()=>viewAddModal()
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />
            <div className='w-full pt-6 px-8'>
                <button className='btn btn-success btn-md' onClick={viewAddModal}>+ Products</button>
                <Modal
                open={addModal}
                onClose={viewAddModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='uppercase'>
                        Add New Product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                        <form action="post" className='flex flex-col gap-10 ' onSubmit={postCreateProduct}>
                            <TextField label="Your Title" variant="standard" value={data.title} onChange={ e => setData('title',e.target.value)} error={props.errors.title}/>
                            <TextField label="Your Description" variant="standard" multiline rows={5} value={data.description} onChange={ e => setData('description',e.target.value)} error={props.errors.description}/>
                            <Typography  className='flex gap-5'>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        value={data.price}
                                        onChange={e=>setData('price',e.target.value)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        error={props.errors.price}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Image</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        onChange={e=>setData('image',e.target.files[0])}
                                        type="file"
                                        startAdornment={<InputAdornment position="start">-</InputAdornment>}
                                        error={props.errors.image}
                                    />
                                </FormControl>
                            </Typography>
                            <TextField label="Your Tag" variant="standard" multiline rows={3} placeholder="Separate by comma (,)" value={data.tag} onChange={e=>setData('tag',e.target.value)} error={props.errors.tag}/>
                            <Button color='success' fullWidth={true} variant="contained" type='submit'>Add</Button>
                        </form>
                    </Typography>
                </Box>
                </Modal>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-3 flex-wrap">
                  {props.products.length != 0 ? props.products.map((menu,i)=>{
                      return <PromoteMenuItem key={i} menu={menu} shadow={"shadowme1"} admin={true}/>
                  }) : <p className="shadowme1 p-5 w-full">No Products in current tab at this time</p>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

