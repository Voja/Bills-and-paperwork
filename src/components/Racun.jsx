import React from 'react'

export default function Racun(props) {
    return (
        <div className='container oukviren pb-2 pt-2' >
            <div className='row'>
                <div className='col-5'>
                    <label >Platilac</label>
                    <textarea className='form-control' readonly={!props.aktivan} cols="30" rows="4"></textarea>
                </div>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-3'>
                            <label >Sifra plac.</label>
                            <input className='form-control' readonly={!props.aktivan} type="text" />
                        </div>
                        <div className='col-3'>
                            <label >Valuta</label>
                            <input className='form-control' readonly={!props.aktivan} readOnly type="text" value='RSD' />
                        </div>
                        <div className='col-6'>
                            <label >Iznos</label>
                            <input className='form-control' readonly={!props.aktivan} type="number" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <label >Tekuci racun primaoca</label>
                            <input className='form-control' readonly={!props.aktivan} type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <label >Svrha uplate</label>
                    <input className='form-control' readonly={!props.aktivan} type="text" />
                </div>
                <div className='col-2'>
                    <label >Broj modula</label>
                    <input className='form-control' readonly={!props.aktivan} type="number" />
                </div>
                <div className='col-5'>
                    <label >Poziv na broj</label>
                    <input className='form-control' readonly={!props.aktivan} type="text" />
                </div>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <label >Primalac</label>
                    <textarea className='form-control' readonly={!props.aktivan} cols="30" rows="4"></textarea>
                </div>
                <div className='col-7'>
                    {props.aktivan && (
                        <button className='form-control btn btn-secondary mt-5'>Uplati</button>
                    )}
                </div>
            </div>
        </div>
    )
}
