import React from 'react'
import Ilustration from '../../images/illustration-laptop-desktop.svg'
import IlustrationMobile from '../../images/illustration-laptop-mobile.svg'
import { DesignFutureContainer, Title, Content, ContentText, ImageDiv } from './styles.js'

const FreeOpenSimple = () => {
    return (

        <>

            <DesignFutureContainer>
                <div className="batata">
                    <ImageDiv>
                        <picture>
                            <source media="(min-width: 768px)" srcSet={Ilustration} />
                            <img src={IlustrationMobile} />
                        </picture>
                    </ImageDiv>

                    <Content>
                        <ContentText>
                            <h4>Free, open, simple</h4>
                            <span>Bogr is a free and open source application backed by a large community of helpful developers.
                                It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party
                                commenting tools, and works seamessly with Google Analytics. The architecture is clean and is relatively
                                ease to learn.
                            </span>
                        </ContentText>

                        <ContentText>
                            <h4>Powerful tooling</h4>
                            <span>Batteries included. We built a simple and straightforward CLI tool that makes customization and
                                deployment a breeze, but capabe of producing even the most complicated sites.
                            </span>
                        </ContentText>
                    </Content>

                </div>

            </DesignFutureContainer>
        </>
    )
}

export default FreeOpenSimple