let data: number;
// let data: number | string;
//data = '22';

interface ICar {
    color: string;
    model: string;
    topSpeed?: number; //opcjonalne property
}

const car1: ICar = {
    color: 'blue',
    model: 'opel'
};

const car2: ICar = {
    color: 'red',
    model: 'dacia',
    topSpeed: 100
};

const multiply = (x:number, y:number): string => {
    return (x * y).toString();
};
