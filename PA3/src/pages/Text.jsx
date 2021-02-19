import {Component, Fragment} from 'react';

class Text extends Component {
    render() {
        return (
            <div className="content-container">
                <p>I met a traveller from an antique land,<br/>
                    Who said—“Two vast and trunkless legs of stone<br/>
                    Stand in the desert. . . . Near them, on the sand,<br/>
                    Half sunk a shattered visage lies, whose frown,<br/>
                    And wrinkled lip, and sneer of cold command,<br/>
                    Tell that its sculptor well those passions read<br/>
                    Which yet survive, stamped on these lifeless things,<br/>
                    The hand that mocked them, and the heart that fed;<br/>
                    And on the pedestal, these words appear:<br/>
                    My name is Ozymandias, King of Kings;<br/>
                    Look on my Works, ye Mighty, and despair!<br/>
                    Nothing beside remains. Round the decay<br/>
                    Of that colossal Wreck, boundless and bare<br/>
                    The lone and level sands stretch far away.”</p>
                <p><a href="https://www.poetryfoundation.org/poems/46565/ozymandias">"Ozymandias" by Percy Bysshe
                    Shelley</a></p>
            </div>
        );
    }
}

export default Text;