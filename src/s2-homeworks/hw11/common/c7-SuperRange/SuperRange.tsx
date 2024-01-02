import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                color: "#00CC22",
                "& .MuiSlider-thumb": {
                    backgroundColor: 'white',
                },
                "& .MuiSlider-rail": {
                    borderRadius: 10,
                    color: "#8B8B8B"
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
