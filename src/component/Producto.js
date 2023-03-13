import { TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import useGetData from "../hooks/useGetData";
import Valores from "./Valores";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";



const Producto = (props) => {
    const { canal } = props;
    const [porcentajeAumento, setPorcentajeAumento] = useState(0);
    const [precioInicial, setPrecioInicial] = useState(0);
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const data = useGetData()
    if (!data.productos) { return <div>Loading...</div>; }

    const handlePrecioInicialChange = (event) => {
        setPrecioInicial(event.target.value);
    };

    const handlePorcentajeAumentoChange = (event) => {
        setPorcentajeAumento(event.target.value);
    };



    const productos = data.productos.map((producto) => {
        return (
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(16, 0.5fr)' }}>

                    <Typography  style={{textAlign:'center', marginTop:'50px', marginRight:'4px'
                    }}>{producto.id}  {producto.name}</Typography>

                    <div style={{ marginTop: '18px'}}>

                        <TextField type='number'
                            placeholder="$0"
                            id={`precioInicial_${producto.id}`}
                            onChange={handlePrecioInicialChange}
                        ></TextField>

                        <TextField type='number'
                            placeholder="%"
                            id={`porcentajeAumento_${producto.id}`}
                            onChange={handlePorcentajeAumentoChange}
                            >
                        </TextField>

                    </div>
                    <div style={{ marginLeft: '8px', marginTop: '18px'}}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>

                    </div>
                    {meses.map((element) => (
                        <div style={{ marginLeft: '2px'}}>

                            <div key={`${producto.id}-${element}`} >
                                {element}
                            </div>
                            <div>
                                <Valores
                                    id={`${canal}-${producto.id}-${element}`}
                                    porcentajeAumento={porcentajeAumento}
                                    precioInicial={precioInicial}
                                    mes = {element}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        );
    })



    return (
        <div>
            {productos}
        </div>
    );
}

export default Producto;