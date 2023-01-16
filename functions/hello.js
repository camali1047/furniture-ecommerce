// domain/.netlify/functions/hello
const item=[
  {id:2,name:"ali"},{id:3,name:"cam"}
]
const item2={
  credential:{
  name:"ali",
  lastName:"cam"
  }
}

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(item2),
  }
}