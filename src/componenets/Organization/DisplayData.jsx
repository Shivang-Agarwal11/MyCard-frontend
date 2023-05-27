import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import MedicalDataDisplay from '../MedicalData/MedicalDataDisplay';

export default function DisplayData(){
    const { orgData } =useStateContext();
    const typeOfOrg= orgData.org.type
    return(
        <div>
        {typeOfOrg=='Medical'?<MedicalDataDisplay/>:<></>}
        </div>
    );
}