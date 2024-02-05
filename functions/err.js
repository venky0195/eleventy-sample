function handler (req, res) {
  try {
    throwErrorExample();
} catch (error) {
    console.error('Caught an error:', error.message);
}
}

  function throwErrorExample() {
    throw new Error('This is a custom runtime error!');
}

  export default handler