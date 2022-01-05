const delay = function (time = 0) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
      }
    );
  };
  
  const delayedMessage = async () => {
    console.log("Hello");
    await delay(2000);
    console.log("World");
  };
  
  delayedMessage();