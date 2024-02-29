"use client";
import React, { useState } from 'react';

const Formulario: React.FC = () => {
    const [notas, setNotas] = useState<number[]>([]); // Estado para armazenar as notas
    const [media, setMedia] = useState<number | null>(null);

    const handleInserirNota = () => {
        const inputNota = document.getElementById('nota') as HTMLInputElement;
        const novaNota = parseFloat(inputNota.value);

        if (!isNaN(novaNota)) {
            setNotas([...notas, novaNota]);
            inputNota.value = ''; // Limpa o campo após adicionar a nota
        }
        console.log('Array de Notas:', notas);
    };

    const calcularMedia = () => {
        if (notas.length > 0) {
            const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
            const mediaCalculada = somaNotas / notas.length;
            setMedia(mediaCalculada);
            console.log(mediaCalculada);
        }
       

    };

    return (<div>
        <h1 className="text-2xl font-bold mb-4">Calcule a média da turma!</h1>
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <h3 className="text-lg mb-2">Insira as notas!</h3>
            <input
                type="number"
                id='nota'
                className="w-full p-2 mb-2 bg-gray-300 rounded-md"
                placeholder="ex: 5.7"
            />

            <button className="bg-blue-500 text-white p-2 rounded-md m-2" onClick={handleInserirNota}>
                Inserir mais uma nota
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md m-2" onClick={calcularMedia}>
                Finalizar e calcular média
            </button>
        </div>

        {media !== null && (
                    <div className="mt-4 flex flex-row gap-1">
                        <p className="font-bold ml-2">Média Calculada:</p>
                        <p>{media.toFixed(2)}</p>
                    </div>
                )}
    </div>
    );
};

export default Formulario;