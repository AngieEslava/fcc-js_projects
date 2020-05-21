function palindrome(str) {
  const alfanumerico = str
    .toLowerCase()
    
    .match(/[a-z0-9]/g);

 
  return alfanumerico.join('') === alfanumerico.reverse().join('');
}

palindrome('eye');