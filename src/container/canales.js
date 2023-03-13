import React, { useState, useEffect, PureComponent } from "react";
import { getApi } from "../hooks/getApi.js";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Producto from "../component/Producto.js";

const Canales = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(true);

    useEffect(() => {
        getApi()
            .then((response) => {
                setData(response.response.assumptionData[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleCountryClick = (pais) => {
        setSelectedCountry(pais);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }



    return (
        <section >

            <Typography style={{ fontSize: '30px' }}>Precio (P)</Typography>
            <Typography style={{ fontSize: 'small' }}>Plan de ventas</Typography>

            <div style={{ marginTop: '20px', }}>
                <div>
                    <Typography style={{ fontSize: '20px' }}>Carga de datos / precios</Typography>

                    {data.paises.map((pais) => (
                        <Button
                            key={pais.value}
                            id={pais.value}
                            onClick={() => handleCountryClick(pais.value)}>
                            {pais.value}
                        </Button>))}

                    {selectedCountry && (
                        <div >
                            {data.canales.map((canal) => {
                                return (
                                    <div>
                                        <div style={{
                                            backgroundColor: 'rgb(159, 165, 170)',
                                            textAlign: 'center',
                                            marginTop: '12px',
                                            marginBottom: '8px'
                                        }}>
                                            <Typography>{canal.name}</Typography>
                                        </div>
                                        <Typography
                                            style={{
                                                backgroundColor: 'rgb(194, 194, 194, 0.5)',
                                                textAlign: 'center',
                                                marginBottom: '20px',
                                                marginLeft: '16rem'
                                            }}>
                                            AÑO 1
                                        </Typography>
                                        <Producto canal={canal.name} />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Canales;
