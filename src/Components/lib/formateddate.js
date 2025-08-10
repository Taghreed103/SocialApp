      
      
  export     function  formatDate(date){

    const formattedDate = new Date(date);

    const options = { month: 'long', day: 'numeric', hour: '2-digit'  , minute: '2-digit' , year: 'numeric' };
    const result = formattedDate.toLocaleDateString('en-US', options);
    return result

}