
//modulo react e rotas-react
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//rotas dos componentes
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

//Propriedades no react são atributos que passa para um tag
//exact: verificar rota exata para o barra
function Routes(){
    return(
        <BrowserRouter>
            <Route path="/"  exact component={Landing} />
            <Route path="/study"  component={TeacherList} />
            <Route path="/give-classes"  component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;


