import React from 'react'
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../Components/Modal';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
  
function ConfessionForm({setText, setOpenModal}) {

    const location = useLocation();
    const theme = location.state?.theme || 'dark';
  
    const changeModalState = (data) => {
  
        setText(data.confessionText);
        setOpenModal(true);
    };

    const initialValues = {

        confessionText: ''
    };

    const validationSchema = Yup.object().shape({

        confessionText: Yup.string().min(40).max(320).required("The confession text cannot be empty!")
    });
    
    return (
  
        <Formik initialValues={initialValues} onSubmit={changeModalState} validationSchema={validationSchema}>
            <Form>
                <ErrorMessage name='confessionText' component='span'/>
                <Field 
                    className={`input ${theme}`} 
                    name='confessionText' 
                    component="textarea" 
                    rows="8"
                    placeholder='I got upset by...'
                    autoComplete='off'>
                </Field>
                <button className={`confessButton ${theme}`} type='submit'>Confess</button>
            </Form>
        </Formik>
    );
}

function Home() {

    const [text, setText] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const location = useLocation();
    const theme = location.state?.theme || 'dark';

    const submitConfession = event => {

        event.preventDefault();

        let input = {
            confessionText: text
        };
        axios.post('http://localhost:4004/confessions', input);
        
        //Close Modal
        setOpenModal(false);
    };

    return (
        <div className={`box ${theme}`}>
            <div className='row header'>

            </div>
            {openModal && <Modal text={text} closeModal={setOpenModal} submit={submitConfession}/>}
            <div className='row content'>
                <div className='title'>
                    <p className='bold'>Confession</p>
                    <p>Do you have something you would like to share?</p>
                    <p>Something you would like to get out of your chest?</p>
                    <p>You will not find forgiveness here if that is what you seek.</p>
                </div>
            </div>
                <div className='row content'>
                <ConfessionForm text={text} setText={setText} setOpenModal={setOpenModal}/>
            </div>
            <div className='row footer'>
            
            </div>
        </div>
    )
}

export default Home;