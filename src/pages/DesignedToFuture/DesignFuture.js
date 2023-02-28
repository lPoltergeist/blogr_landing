import React from 'react'
import Ilustration from '../../images/illustration-editor-desktop.svg'
import IlustrationMobile from '../../images/illustration-editor-mobile.svg'
import { DesignFutureContainer, Title, Content, ContentText, ImageDiv } from './styles.js'

const DesignFuture = () => {
    return (

        <>

            <DesignFutureContainer>
                <Title><h1>Design for the future</h1></Title>

                <div className="batata">
                    <Content>
                        <ContentText>
                            <h4>Introducing an extensible editor</h4>
                            <span>Blogr features an exceedingly intuitive interface which lets your focus
                                on one thing: creating content. The editor supports management of
                                multiple blogs and allows easy manipulation of embeds such as images,
                                videos, and markdown. Extensibility with plugins and themes provide
                                ease ways to add functionality or change the looks of a blog.
                            </span>
                        </ContentText>

                        <ContentText>
                            <h4>Robust content management</h4>
                            <span>Flexible content management enables users to easily move through
                                posts. Increase the usability of your blog by adding customized
                                categories, sections, format, or flow. With this functionality, you're in
                                full control.
                            </span>
                        </ContentText>
                    </Content>

                    <ImageDiv>
                        <picture>
                            <source media="(min-width: 768px)" srcSet={Ilustration} />
                            <img src={IlustrationMobile} />
                        </picture>
                    </ImageDiv>
                </div>

            </DesignFutureContainer>
        </>
    )
}

export default DesignFuture;