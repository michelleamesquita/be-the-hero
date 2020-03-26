import React,{useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents,setIncidents] = useState([]);//comeca como array vazio )

    const history = useHistory();
    useEffect(()=> {
        api.get('profile',{headers:{
            Authorization: ongId,
        }}).then(response => {
            setIncidents(response.data);

        }) //para pegar dados
    }, [ongId]);//2 paramentros. qual funcao  e quando sera executada

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id != id))

        }catch(err){
            alert('Erro ao deletar caso. Tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt="Be the Hero"/>
            <span>Bem vinda, {ongName} </span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                     <li key={incidents.id}>
                     <strong>CASO:</strong>
                     <p>{ incidents.title}</p>
 
                     <strong>DESCRIÇÃO</strong>
                     <p>{ incidents.description}</p>
 
                     <strong>VALOR:</strong>
                     <p>{ Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>
 
                     <button  onClick={()=>handleDeleteIncident(incidents.id)}type="button">
                         <FiTrash2 size={20} color="#a8a8b3"/>
                     </button>
                 </li>
                ))} 
            </ul>

        </div>
    );
}