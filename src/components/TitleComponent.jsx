import React from 'react';

const TitleComponent = () => {
  return (
    <div className='container-fluid'>
      <h1 className='imc-title'>¿Que es el IMC?</h1>
      <h3 className='imc-definition'>
        {' '}
        El índice de Masa Corporal (IMC) es la fórmula para determinar el peso
        ideal y saludable de una persona según su estatura y su peso actual.
        Para determinar si una persona está por encima de su peso ideal o está
        demasiado delgada se utiliza el IMC o Índice de Masa Corporal, también
        conocido como BMI (Body Mass Index) o IQ (Índice de Quetelet). Por regla
        general, el resultado que se obtiene del Índice de masa Corporal puede
        determinar si su estado físico y de salud es bueno o por el contrario
        debe cuidarse en mayor medida.
      </h3>
    </div>
  );
};

export default TitleComponent;
