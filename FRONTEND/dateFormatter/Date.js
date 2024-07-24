export const formatDate = (inputDate) => {

    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

const inputDateString = '2024-07-24T15:28:42.944Z';
const formattedDate = formatDate(inputDateString);
console.log(formattedDate); 
