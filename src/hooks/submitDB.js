export function postData(url, data){
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
}

export function postImage(url, data){
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
  }