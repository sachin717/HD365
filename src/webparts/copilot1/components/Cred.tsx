import * as React from 'react';
import Chat from './Chat';
import ContextService from './ContextService';

const Cred: React.FC = () => {
  return (
    <div>
           <Chat
                key={0}
                appClientId={"9f40af2b-868f-438b-8b92-63c9a183a397"}
                tenantId={"db23acaf-be24-4d51-9d6e-5a516262697c"}
                environmentId={"dd8e7419-454a-43dd-85d3-e588a595e6ea"}
                agentIdentifier={"crf54_agent2_JLSbgq"}
                directConnectUrl={"https://dd8e7419454a43dd85d3e588a595e6.ea.environment.api.powerplatform.com/copilotstudio/dataverse-backed/authenticated/bots/crf54_agent2_JLSbgq/conversations?api-version=2022-03-01-preview%22"}
                showTyping={false}
                currentUserLogin={ContextService.GetCurrentUser().email}
                baseUrl={"https://cubiclogics.sharepoint.com/sites/Sachin/_layouts/15/workbench.aspx"}  
              />
    </div>
  );
};

export default Cred;

