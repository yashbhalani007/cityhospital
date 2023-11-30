
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../redux/slice/alert.slice';
import { enqueueSnackbar } from 'notistack';

function Alert(props) {
    const dispatch = useDispatch()

    const alert = useSelector(state => state.alert)
    console.log(alert);

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }

        const setTimeOutRef = setTimeout(() => {
            dispatch(resetAlert())
        },2000)

        return () => {
            clearTimeout(setTimeOutRef)
        }

    }, [alert.text])

    return (
        <div>

        </div>
    );
}

export default Alert;