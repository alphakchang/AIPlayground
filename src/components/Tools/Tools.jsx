import React from 'react';
import './Tools.css';
import ToolCard from '../ToolCard/ToolCard';
import promptTool from './prompt_tool.png';
import planner from './planner.png';
import contentEditor from './content_editor.gif';
import humourResponder from './humour_responder.gif';
import alphai from './alphai.png';
import keyword from './keyword.png';
import balsam from './balsam_articles.png';
import one_in_three from './1-in-3.png';
import text_cut from './text-cut.png';
import lilisamo from './lilisamo.png';

const Tools = ({ proxy }) => {
    return (
        <>
            <section id="prompting">
                <div>
                    <h1 className="display-6">Prompting related</h1>
                    <div className="grid-container text-center">

                        <div>
                            <a href={`${proxy}:5001/alphai/`}>
                                <ToolCard
                                    image={alphai}
                                    title="Alphai"
                                    description="AI assistant at Alpha, happy to assist you with your queries"
                                    link={`${proxy}:5001/alphai/`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                        <div>
                            <a href={`${proxy}:5277`}>
                                <ToolCard
                                    image={promptTool}
                                    title="Prompt Tool"
                                    description="This AI powered tool allows you to utilize the power of prompts"
                                    link={`${proxy}:5277`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section id='content-editor'>
                <div>
                    <h1 className="display-6">Content Editor & Personalized alternatives</h1>
                    <div className="grid-container text-center">
                        <div>
                            <a href={`${proxy}:5288`}>
                                <ToolCard
                                    image={contentEditor}
                                    title="Content Editor"
                                    description="Improve content within seconds with the help of AI"
                                    link={`${proxy}:5288`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                        <div>
                            <a href={`${proxy}:5288/isabelle`}>
                                <ToolCard
                                    image={one_in_three}
                                    title="Best out of three"
                                    description="Get AI's opinion on the best written out of three"
                                    link={`${proxy}:5288/isabelle`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                        <div>
                            <a href={`${proxy}:5288/alex`}>
                                <ToolCard
                                    image={text_cut}
                                    title="Text Cut"
                                    description="Reduce the characters in your text, keep the meaning"
                                    link={`${proxy}:5288/alex`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section id='seo'>
                <div>
                    <h1 className="display-6">SEO related</h1>
                    <div className="grid-container text-center">
                        <div>
                            <a href={`${proxy}:5053/keyword/`}>
                                <ToolCard
                                    image={keyword}
                                    title="Keyword Checker"
                                    description="Check if keywords are included in the written content"
                                    link={`${proxy}:5053/keyword/`}
                                    linkText="Go"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='ft'>
                <div>
                    <h1 className="display-6">Fine-tuned models</h1>
                    <div className="grid-container text-center">
                        <div>
                            <a href={`${proxy}:5053`}>
                                <ToolCard
                                    image={humourResponder}
                                    title="Humourous Responder"
                                    description="The Finetuned AI that responds to everything with humour"
                                    link={`${proxy}:5053`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                        <div>
                            <a href={`${proxy}:5288/jack`}>
                                <ToolCard
                                    image={balsam}
                                    title="Balsam Articles"
                                    description="Generate French Blogposts using Balsam approved styles"
                                    link={`${proxy}:5288/jack`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                        <div>
                            <a href={`${proxy}:5288/lilisamo`}>
                                <ToolCard
                                    image={lilisamo}
                                    title="Lilisamo German"
                                    description="The model that translates into German with lilisamo styles"
                                    link={`${proxy}:5288/lilisamo`}
                                    linkText="Go"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section id='other'>
                <div>
                    <h1 className="display-6">Others</h1>
                    <div className="grid-container text-center">
                        <div>
                            <a href={`${proxy}:5008`}>
                                <ToolCard
                                    image={planner}
                                    title="Work Allocation Planner"
                                    description="Individual and Team availability easy visualisation tool"
                                    link={`${proxy}:5008`}
                                    linkText="See Prototype"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tools;