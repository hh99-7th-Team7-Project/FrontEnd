import React from 'react'

const NaverLogin = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  return (
    <div>NaverLogin</div>
  )
}

export default NaverLogin