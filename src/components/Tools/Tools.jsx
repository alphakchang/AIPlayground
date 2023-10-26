import React from 'react';
import './Tools.css';
import ToolCard from '../ToolCard/ToolCard';
import promptTool from './prompt_tool.png';
import planner from './planner.png';
import supportAssist from './supportAssistant.png';
import contentEditor from './content_editor.gif';
import humourResponder from './humour_responder.gif';

const Tools = () => {
    return(
        <section id="tools">
            <div>
                <h1 className="display-6">Tools</h1>
                <div className="grid-container text-center">

                    <div>
                        <ToolCard
                            image={promptTool}
                            title="Prompt Tool"
                            description="This AI powered tool allows you to utilize the power of prompts"
                            link="http://naga.alphacrc.com:5277"
                            linkText="Go"
                        />
                    </div>

                    <div>
                        <ToolCard
                            image={contentEditor}
                            title="Content Editor"
                            description="Improve content within seconds with the help of AI"
                            link="http://naga.alphacrc.com:5288"
                            linkText="Go"
                        />
                    </div>

                    <div>
                        <ToolCard
                            image={humourResponder}
                            title="Humourous Responder"
                            description="The Finetuned AI that responds to everything with humour"
                            link="http://naga.alphacrc.com:5053"
                            linkText="Go"
                        />
                    </div>

                    <div>
                        <ToolCard
                            image={planner}
                            title="Work Allocation Planner"
                            description="Individual and Team availability easy visualisation tool"
                            link="http://naga.alphacrc.com:5008/"
                            linkText="Prototype View"
                        />
                    </div>

                    <div>
                        <ToolCard
                            image={supportAssist}
                            title="Support Assistant"
                            description="Interactive support chat assistant for memoQ troubleshooting"
                            link="#"
                            linkText="Coming Soon"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Tools;