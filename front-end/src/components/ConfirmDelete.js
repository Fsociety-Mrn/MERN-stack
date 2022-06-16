import {  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataID ,dataURL} from './Dialoglogout'
import { deleteArchive } from '../AuthenticationCRUD/CRUD_firebase'

export let deleted = false

const ConfirmDelete = () => {
    const [open, setOpen] = useState(true)
    let navigate = useNavigate(); //Naviagte
  return (
    <div>
        <Dialog
      open={open}   
    >
      <DialogTitle variant='h5' color='black' style={{
        backgroundColor: '#FAEBCD'
      }} >
        
      </DialogTitle>
      {/*  However,  */}
      <DialogContent variant='body' style={{backgroundColor: '#FAEBCD' }}>
        <DialogContentText color='black' >
          Once you delete this it can be undone.
         Are you sure you want to <strong> delete</strong> this ?
        </DialogContentText>
        
      </DialogContent>

      <DialogActions 
      style={{
        backgroundColor: '#FAEBCD',
      }}> 

        <Button variant='contained' onClick={()=>{
            //deleteImage('https://firebasestorage.googleapis.com/v0/b/laclothing-78c1f.appspot.com/o/Product%2F1654441225259received_1335567356952066.webp?alt=media&token=aef5dec3-db5a-4202-b531-9d1709cd54b6')
            deleteArchive(dataID,dataURL)
            deleted = true
            navigate("/ViewArchive")}
        }>
          yes
        </Button>
     
        <Button variant='contained' onClick={()=>{
          // data_shgow = false
          navigate("/ViewArchive")
          setOpen(false)
        }}>
          cancel
        </Button>
          
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default ConfirmDelete