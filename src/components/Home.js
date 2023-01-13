import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"

      />
      <Section
        title="Model Y"
        description="Order Online for Touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"

      />
      <Section
        title="Model X"
        description="Order Online for Touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"

      />
      <Section
        title="Model 3"
        description="Order Online for Touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"

      />
      <Section
        title="Lowest Solar panel"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"

      />
      <Section
        title="Accessories"
        description="Money-back gurantee"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"

      />
    </Container>
  )
}

const Container = styled.div `
  height: 100vh;
`

export default Home;