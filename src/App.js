import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import ProTip from './ProTip'
import iconData from './constants'
import CopyIcon from './components/CopyIcon'
import { render } from 'react-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
      <div className="static-page row">
        <div className="col-12 justify-content-center align-items-center">
          <h1>Copy Symbols</h1>
          <div className="card">Explore Emojis</div>
          {iconData.map((category, index) => (
            <div key={index}>
              <h2 key={index}>{category.category}</h2>
              <div key={index}>
                {category.subCategories.map((subCategory, index) => (
                  <React.Fragment key={index}>
                    <h3 key={index}>{subCategory.subcategory}</h3>
                    <div key={index} className="container">
                      {subCategory.icons.map((icon, index) => (
                        <CopyIcon key={index} icon={icon} />
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
