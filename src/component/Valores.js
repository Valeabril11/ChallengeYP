import { TextField } from "@mui/material";
import React from "react";
import useGetData from "../hooks/useGetData";

const Valores = ({id, porcentajeAumento, precioInicial, mes}) => {
    const data = useGetData();
    if (!data.productos) {
        return <div>Loading...</div>;
    }


    const generarValue = (mes) => {
        if (mes === "Enero" && porcentajeAumento) {
           return precioInicial;
        } else if (porcentajeAumento) {
          const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
          const index = meses.findIndex(m => m === mes);
          let inicial = 0;
          for (let i = 0; i <= index; i++) {
            if (i === 0) {
              inicial = parseInt(precioInicial) + (parseInt(precioInicial) * parseInt(porcentajeAumento)) / 100;
            } else {
              inicial += (inicial * parseInt(porcentajeAumento)) / 100;
            }
          }
          return inicial;
        }
      };
      


    return (
        <div>
            <TextField
                id={id}
             value={generarValue(mes)}
                placeholder="$0"
                variant="outlined"
                style={{ marginRight: "10px", size:'10px', width: '70px'  }}
                type='number'
                


            />
        </div>
    );
};

export default Valores;
