import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Col className="text-center py-3">
                Copyright &copy; Prillare | Desarrollado por <a href="https://www.melissahuerta.dev" target="_blank">Melissa Huerta Dev</a>
            </Col>
        </Container>
    </footer>
  )
}

export default Footer