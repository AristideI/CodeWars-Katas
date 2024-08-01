function convertQueryToMap(queryString) {
    if(queryString.length === 0)return {};
      const result = {};
  
      const pairs = queryString.split('&');
      pairs.forEach(pair => {
          const [rawKey, rawValue] = pair.split('=');
          const keys = rawKey.split('.');
          const value = decodeURIComponent(rawValue);
          
          let current = result;
          keys.forEach((key, index) => {
              if (index === keys.length - 1) {
                  current[key] = value;
              } else {
                  if (!current[key]) {
                      current[key] = {};
                  }
                  current = current[key];
              }
          });
      });
  
      return result;
  }