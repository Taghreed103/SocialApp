      
      
  export     function  formatDate(date){

    const formattedDate = new Date(date);

    const options = { month: 'long', day: 'numeric', hour: '2-digit' };
    const result = formattedDate.toLocaleDateString('en-US', options);
    return result

}