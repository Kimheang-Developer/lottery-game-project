export const currentDate = () => {
    const current = new Date();
    const year = current.getFullYear();
    const month = ((current.getMonth()+1) < 10 ? '0' : '') + (current.getMonth() + 1);
    const day = (current.getDate() < 10 ? '0' : '') + current.getDate();
    const currentDate = `${year}${month}${day}`;

    return currentDate;
}