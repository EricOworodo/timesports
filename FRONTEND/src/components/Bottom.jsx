import React from 'react'
import Bottom_Quick_Link from './Bottom_Quick_Link'
import { Container, Row, Col } from 'react-bootstrap'
import Bottom_Contact from './Bottom_Contact'
import Bottom_Sports_Link from './Bottom_Sports_Links'

export default function Bottom() {
  return (
    <div style={{background:'#0592D9', color:'white', paddingTop:80, paddingBottom:80}}>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Bottom_Quick_Link />
          </Col>
          
          <Col>
            <Bottom_Sports_Link />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
           
          </Col>
        </Row>
      </Container>
    </div>
  )
}
