// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

// // Create an instance of Axios
// const axioos = axios.create();

// // Create a new instance of MockAdapter
// const mock = new MockAdapter(axioos, { delayResponse: 300 });

// // Mock GET request to /users
// mock.onGet('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd4db0dcad815a07fd071/instances/list').reply(200, {
//   entities: 
//     [
//       {
//           "Username": "Test1",
//           "ProfileDetails": {
//               "ProfileImageUrl": "Test1",
//               "Gender": "Test1",
//               "DateOfBirth": "Test1"
//           },
//           "SubscriptionEndDate": "Test1",
//           "PasswordHash": "Test1",
//           "Address": {
//               "StateProvince": "Test1",
//               "IsPrimary": "Test1",
//               "City": "Test1",
//               "AddressType": "Test1",
//               "PostalCode": "Test1",
//               "Country": "Test1",
//               "Street": "Test1"
//           },
//           "SubscriptionType": "Test1",
//           "DateRegistered": "Test1",
//           "User_Schema_Id": "Test1",
//           "PlatformSchemas": [
//               {
//                   "integrations": [
//                       "BigQueryData",
//                       "Cost Analysis",
//                       "CloudStorage",
//                       "BigQuery_Pipeline"
//                   ],
//                   "platform_description": "BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale.",
//                   "platform_doc_url": "https://cloud.google.com/bigquery/docs/reference/rest",
//                   "platform_git_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/",
//                   "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654//8fbb7a03-9569-419d-a570-9261c1bb26f1_$$google_bigquery_logo_icon_168150.png",
//                   "platform_name": "BigQuery",
//                   "platform_tags": [],
//                   "platform_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/"
//               },
//               {
//                   "integrations": [
//                       "OpenAI Usage"
//                   ],
//                   "platform_description": "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
//                   "platform_doc_url": "https://platform.openai.com/docs/api-reference/introduction",
//                   "platform_git_url": "",
//                   "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/3e81b8f3-6d94-4ab9-8d1b-21812e24953e",
//                   "platform_name": "OpenAI",
//                   "platform_tags": [],
//                   "platform_url": "https://openai.com/"
//               },
//               {
//                   "integrations": [
//                       "AzureCostAnalysis",
//                       "StrorageAccount",
//                       "VirtualMachine"
//                   ],
//                   "platform_description": "Build, manage, and monitor all your apps in Microsoft Azure Portal. A single, unified hub built for you, your team, and your projects.",
//                   "platform_doc_url": "https://learn.microsoft.com/en-us/azure/azure-portal/",
//                   "platform_git_url": "",
//                   "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/33add040-2d18-4937-84b6-0569e7aadff3",
//                   "platform_name": "Azure ",
//                   "platform_tags": [],
//                   "platform_url": "https://azure.microsoft.com/en/"
//               },
//               {
//                   "integrations": [
//                       "Organization Usage",
//                       "Data Sharing Usage",
//                       "Account Usage",
//                       "Snowflake_Pipeline"
//                   ],
//                   "platform_description": "Snowflake isn’t just a great technology company. We’re all about the data—easily enabling governed access to near-infinite amounts of data, and cutting-edge tools, applications, and services. With the Data Cloud, you can collaborate locally and globally to reveal new insights, create previously unforeseen business opportunities, and identify and know your customers in the moment with seamless and relevant experiences.",
//                   "platform_doc_url": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
//                   "platform_git_url": "",
//                   "platform_icon_url": "https://cdn.aidtaas.com/321ff654/designer/321t654/19aa38ec-cb60-44a8-8bc6-a0ea3fa356c7_$$SNOW.png",
//                   "platform_name": "Snowflake",
//                   "platform_tags": [],
//                   "platform_url": "https://www.snowflake.com/en/"
//               },
//               {
//                   "integrations": [
//                       "SystemLogs",
//                       "ApplicationOperations",
//                       "ApplicationUsers",
//                       "Okta_Pipeline" 
//                   ],
//                   "platform_description": "Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we’ve got you covered.",
//                   "platform_doc_url": "https://developer.okta.com/docs/reference/",
//                   "platform_git_url": "https://github.com/okta/okta-sdk-java",
//                   "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654/116e802e-dedd-4522-ba96-1c420f6428af_$$okta_logo.png",
//                   "platform_name": "OKTA",
//                   "platform_tags": [],
//                   "platform_url": "https://www.okta.com/"
//               }
//           ],
//           "UserId": "TestUser1",
//           "LastLogin": "Test1",
//           "AccountStatus": "Test1",
//           "SubscriptionStartDate": "Test1",
//           "Email": "Test1",
//           "id": "TestUser1"
//       },
//       {
//           "Username": "monkey",
//           "ProfileDetails": {
//               "ProfileImageUrl": "Test1",
//               "Gender": "Test1",
//               "DateOfBirth": "Test1"
//           },
//           "SubscriptionEndDate": "Test1",
//           "PasswordHash": "Test1",
//           "Address": {
//               "StateProvince": "Test1",
//               "IsPrimary": "Test1",
//               "City": "Test1",
//               "AddressType": "Test1",
//               "PostalCode": "Test1",
//               "Country": "Test1",
//               "Street": "Test1"
//           },
//           "SubscriptionType": "Test1",
//           "DateRegistered": "Test1",
//           "User_Schema_Id": "Test1",
//           "PlatformSchemas": [
//               {
//                   "integrations": [
//                       "BigQueryData",
//                       "Cost Analysis",
//                       "CloudStorage"
//                   ],
//                   "platform_description": "BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale.",
//                   "platform_doc_url": "https://cloud.google.com/bigquery/docs/reference/rest",
//                   "platform_git_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/",
//                   "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654//8fbb7a03-9569-419d-a570-9261c1bb26f1_$$google_bigquery_logo_icon_168150.png",
//                   "platform_name": "BigQuery",
//                   "platform_tags": [],
//                   "platform_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/"
//               }
//           ],
//           "UserId": "TestUser2",
//           "LastLogin": "Test1",
//           "AccountStatus": "Test1",
//           "SubscriptionStartDate": "Test1",
//           "Email": "Test1",
//           "id": "TestUser2"
//       }
//   ]
//   ,
// });
// mock.onGet('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instances/list').reply(200, {
//   entities: [
//     {
//         "Integration_Name": "sample",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "2","3","4","5"
//         ],
//         "workflowIds": [],
//         "id": "sample"
//     },
//     {
//         "Integration_Name": "Snowflake_Pipeline",
//         "Integration_Description": "Snowflake_Pipeline",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65fd1b231574a22f5d1a0p4c"
//         ],
//         "workflowIds": [],
//         "id": "Snowflake_Pipeline"
//     },
//     {
//         "Integration_Name": "Okta_Pipeline",
//         "Integration_Description": "Okta_Pipeline",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d2f6c11b707d34e93754c1"
//         ],
//         "workflowIds": [],
//         "id": "Okta_Pipeline"
//     },
//     {
//         "Integration_Name": "BigQuery_Pipeline",
//         "Integration_Description": "BigQuery_Pipeline",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65f8101dec18e4223f021f26"
//         ],
//         "workflowIds": [],
//         "id": "BigQuery_Pipeline"
//     },
//     {
//         "Integration_Name": "Azure Cost Analysis",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d3369f1b707d34e9375580"
//         ],
//         "workflowIds": [],
//         "id": "Azure Cost Analysis"
//     },
//     {
//         "Integration_Name": "AzureCostAnalysis",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d3369f1b707d34e9375580",
//             "65f14bfc5f353406a916b8dc",
//             "660a5f4c1574a22f5d1a1f1d"
//         ],
//         "workflowIds": [],
//         "id": "AzureCostAnalysis"
//     },
//     {
//         "Integration_Name": "Organization Usage",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65fd1b231574a22f5d1a0d5c"
//         ],
//         "workflowIds": [],
//         "id": "Organization Usage"
//     },
//     {
//         "Integration_Name": "ApplicationOperations",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d2f9a61b707d34e93754cf"
//         ],
//         "workflowIds": [],
//         "id": "ApplicationOperations"
//     },
//     {
//         "Integration_Name": "ApplicationUsers",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d302ef1b707d34e9375517"
//         ],
//         "workflowIds": [],
//         "id": "ApplicationUsers"
//     },
//     {
//         "Integration_Name": "ApplicationOperations",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d2f9a61b707d34e93754cf"
//         ],
//         "workflowIds": [],
//         "id": "ApplicationOperations"
//     },
//     {
//         "Integration_Name": "SystemLogs",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d2f6c11b707d34e93754c1"
//         ],
//         "workflowIds": [],
//         "id": "SystemLogs"
//     },
//     {
//         "Integration_Name": "Cost Analysis",
//         "Integration_Description": "",
//         "API_reference": "https://monitoring.googleapis.com",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "660b9ed468ba6066b351fa84",
//             "660b9f9e68ba6066b351fa85",
//             "660ba09468ba6066b351fa86"
           
//         ],
//         "workflowIds": [],
//         "id": "Cost Analysis"
//     },
//     {
//         "Integration_Name": "Data Sharing Usage",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65dc619b1b707d34e937b8be"
//         ],
//         "workflowIds": [],
//         "id": "Data Sharing Usage"
//     },
//     {
//         "Integration_Name": "Account Usage",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65fd1a121574a22f5d1a0d4f"
//         ],
//         "workflowIds": [],
//         "id": "Account Usage"
//     },
//     {
//         "Integration_Name": "LogActivities",
//         "Integration_Description": "Help to retrive the systemlogs",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65d2f6c11b707d34e93754c1",
//             "65d2f9a61b707d34e93754cf",
//             "65d302ef1b707d34e9375517"
//         ],
//         "workflowIds": [],
//         "id": "LogActivities"
//     },
//     {
//         "Integration_Name": "OpenAI Usage",
//         "Integration_Description": "Helps retrieve OpenAI Usage",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "660c1f1022f94a0e93b3de0f",
//             "65d31b2d1b707d34e937552e"
//         ],
//         "workflowIds": [],
//         "id": "OpenAI Usage"
//     },
//     {
//         "Integration_Name": "",
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "username",
//         "username": "",
//         "password": "",
//         "apikey": "",
//         "schemaIds": [],
//         "workflowIds": [],
//         "id": ""
//     },
//     {
//         "Integration_Name": "StrorageAccount",
//         "schemaIds": [
//             "65cdab711b707d34e93752c4",
//             "65cc8e5d1b707d34e93751b3",
//             "660a96c61574a22f5d1a205f"
//         ],
//         "workflowIds": [],
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "id": "StrorageAccount"
//     },
//     {
//         "Integration_Name": "VirtualMachine",
//         "schemaIds": [
//             "65cc6c6f1b707d34e937518e"
//         ],
//         "workflowIds": [],
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "id": "VirtualMachine"
//     },
//     {
//         "Integration_Name": "CloudStorage",
//         "Integration_Description": "",
//         "API_reference": "https://storage.googleapis.com",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "schemaIds": [
//             "65ccb2ea1b707d34e93751ef",
//             "65fbf7b71574a22f5d1a0a82",
//             "65f81d64b9ae611185f27eeb",
//             "660abb1605c9541234bceb02",
//             "660b9d5068ba6066b351fa83",
//             "660ab21605c9541234bceb00"
//         ],
//         "workflowIds": [],
//         "id": "CloudStorage"
//     },
//     {
//         "Integration_Name": "BigQueryData",
//         "schemaIds": [
//             "65f7ec7f5d1ff73e68ddad50",
//             "65fd17781574a22f5d1a0d43",
//             "65f8101dec18e4223f021f26"
//         ],
//         "workflowIds": [],
//         "Integration_Description": "",
//         "API_reference": "https://bigquery.googleapis.com/",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "apikey",
//         "apikey": "Bearer ya29.c.c0AY_VpZjS5X-PsvDYGn3X5IGiTPk0dueAS9ovZCcMJ-PGSV8YQXKR-2rMAe9hm2RcgmdlHk3Jw3nSQ-tetszryGG49zfQ61iMmxXQm0jR2r6M1lAzHP49hhE3STACP11pAbeJfXp7eaCMyMa2AuDg2pznwKG3rI31Letvr7LRAa_2ql8d8vBn4VBvmVDQJJSW1_e-Sv44ysj7vs1lnNdbqhPQx31yjZCtZxcVnXv_AeOd_RDZYt2jECt3LhN44eOB0ppdo-qZsXrj0wZ8reNX8GFFAKIloQuWG5hDMQGO_Yo4H1banT702TJwEivHbqrB94iw7KNS2uggd4V6fDPz6NJovohj6xA8NmsUJvwKVodyisCEaGobitkE384De0i81VVpsghZvuwfOFMmZ6VrZFqFbJtwI8dOkR03i3-fRsM6moUfwlxBfJ52RugvYIn030tk6JRF--l6ntuO7hyj7YXb-j2acZtpJhobt88k3b6xrd3sQ5WO-vXgUJlXgbRYy_k0Wh2XdWrj418-IhZMc2mXd5anv1guIOSfz7azQBpnrOiBvMbc73g4oBMJcmWpV7ZvYkj0sYazamvIjIcMd3UbJcUbi8VIVmrJm-lpIrQWvyxm2es_17mfVBY1MkrsSlqrBukU0JBBti-vVs51o_e8Qmw7S-iu7Mct57qWk2jpelvjo9VW8tgmckgVhmo18dWR8uMfdU2ux3pk9RZu8B87zkthO_fI9Xz6ftYnVSuuv7JhUhIXo6xop_I7OXvpjctVXneccf83Rns0iSq-pJfaxRhXJIQ2gbvQ7oyI6JweWt0p7SwVgOwc1xRpvFpvecZmlQsRyqQ2Jz_x8qbWZ88QemXyusrjJRdjzbWtwtI6BQ9aVta1yjtSdscBB8af7O7lvRwohiMWgw-BOlfdJ6IpbzceIW7t-uZv_fpkRj8QfckMbjVc0gZxtlXXRFZMJozq0hFJrIkbJVp0xjn267Xa4l01-d3lheyj6f_fpvmvIifgnY80sRU",
//         "id": "BigQueryData"
//     },
//     {
//         "Integration_Name": "Platform Methods",
//         "schemaIds": [
//             "655f271b53f7d870cf3903d0"
//         ],
//         "workflowIds": [],
//         "Integration_Description": "",
//         "API_reference": "",
//         "Documentation": "",
//         "Operational_Endpoint": "",
//         "Credentials_type": "",
//         "apikey": "",
//         "id": "Platform Methods"
//     },
//     {
//         "Integration_Name": "Azure Storage Integration",
//         "Integration_Description": "Helps retrieve necessary data regarding Azure Storage Analysis",
//         "API_reference": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id",
//         "Documentation": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id",
//         "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-containers2?tabs=microsoft-entra-id",
//         "Credentials_type": "apikey",
//         "apikey": "",
//         "schemaIds": [
//             "65a7b3681e40c81a6bc9d2a0",
//             "65842331f3766b7212fe6a51",
//             "65841e0ef3766b7212fe6a0f"
//         ],
//         "workflowIds": [],
//         "id": "Azure Storage Integration"
//     },
//     {
//         "Integration_Name": "OpenAI Licenses",
//         "Integration_Description": "Helps retrieve OpenAI Users",
//         "API_reference": "https://platform.openai.com/docs/api-reference/models",
//         "Documentation": "https://platform.openai.com/docs/api-reference/models",
//         "Operational_Endpoint": "https://platform.openai.com/docs/api-reference/models",
//         "Credentials_type": "apikey",
//         "apikey": "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",
//         "schemaIds": [
//             "65a7acfa1e40c81a6bc9d259",
//             "65a7adbb1e40c81a6bc9d25c"
//         ],
//         "workflowIds": [],
//         "id": "OpenAI Licenses"
//     },
//     {
//         "Integration_Name": "ComputeVirtualMachines",
//         "Integration_Description": "Retrieves information about the model view or the instance view of a virtual machine",
//         "API_reference": "https://learn.microsoft.com/en-us/rest/api/compute/virtual-machines/list-all?view=rest-compute-2023-09-01&tabs=HTTP",
//         "Documentation": "https://learn.microsoft.com/en-us/rest/api/compute/virtual-machines/list-all?view=rest-compute-2023-09-01&tabs=HTTP",
//         "Operational_Endpoint": " https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines?api-version=2023-09-01&statusOnly={statusOnly}&$filter={$filter}&$expand=instanceView",
//         "Credentials_type": "apikey",
//         "apikey": "",
//         "schemaIds": [
//             "65a7b9291e40c81a6bc9d2bf",
//             "65a7ba181e40c81a6bc9d2c1",
//             "65a7baa51e40c81a6bc9d2c5"
//         ],
//         "workflowIds": [],
//         "id": "ComputeVirtualMachines"
//     },
//     {
//         "Integration_Name": "OpenAI Models",
//         "Integration_Description": "Helps retrieve OpenAI models",
//         "API_reference": "https://platform.openai.com/docs/api-reference/models",
//         "Documentation": "https://platform.openai.com/docs/api-reference/models",
//         "Operational_Endpoint": "https://platform.openai.com/docs/api-reference/models",
//         "Credentials_type": "apikey",
//         "apikey": "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",
//         "schemaIds": [
//             "65a76ca31e40c81a6bc9d1b0",
//             "65a76d0c1e40c81a6bc9d1b1",
//             "65a76d551e40c81a6bc9d1b2"
//         ],
//         "workflowIds": [],
//         "id": "OpenAI Models"
//     },
//     {
//         "Integration_Name": "Azure Cost Integration",
//         "Integration_Description": "Helps retrieve necessary data regarding Azure Cost Analysis",
//         "API_reference": "https://learn.microsoft.com/en-us/rest/api/consumption/",
//         "Documentation": "https://learn.microsoft.com/en-us/rest/api/consumption/",
//         "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/consumption/",
//         "Credentials_type": "apikey",
//         "apikey": "",
//         "schemaIds": [
//             "65a7b5c91e40c81a6bc9d2ac",
//             "65a7b6f81e40c81a6bc9d2b8"
//         ],
//         "workflowIds": [],
//         "id": "Azure Cost Integration"
//     },
//     {
//         "Integration_Name": "Azure Logs Integration",
//         "Integration_Description": "Helps retrieve necessary data regarding Azure Logs Analytics",
//         "API_reference": "https://learn.microsoft.com/en-us/rest/api/logz/?view=rest-loganalytics-2022-10-27-preview",
//         "Documentation": "https://learn.microsoft.com/en-us/rest/api/logz/?view=rest-loganalytics-2022-10-27-preview",
//         "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/loganalytics/query/get?view=rest-loganalytics-2022-10-27-preview&tabs=HTTP",
//         "Credentials_type": "apikey",
//         "apikey": "",
//         "schemaIds": [
//             "65a7b86a1e40c81a6bc9d2bd"
//         ],
//         "workflowIds": [],
//         "id": "Azure Logs Integration"
//     },
//     {
//         "Integration_Name": "Storage Analysis",
//         "Integration_Description": "Helps retrieve necessary data regarding BigQuery storage utilization",
//         "API_reference": "https://cloud.google.com/bigquery/docs/reference/rest",
//         "Documentation": "https://cloud.google.com/bigquery/docs/reference/rest",
//         "Operational_Endpoint": "https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list",
//         "Credentials_type": "apikey",
//         "apikey": "O7MxbMHmP2fHqge",
//         "schemaIds": [
//             "655ed5aa7c8ba57caa377dd3",
//             "655eeb6ed475d34964c35d48",
//             "655f020059570d3e165fdbe9",
//             "65673c6219b2493ebae30029"
//         ],
//         "workflowIds": [],
//         "id": "Storage Analysis"
//     },
//     {
//         "Integration_Name": "OKTA Apps",
//         "Integration_Description": "Manage applications and/or assignments to users or groups for your organization",
//         "API_reference": "https://developer.okta.com/docs/reference/api/apps/",
//         "Documentation": "https://developer.okta.com/docs/reference/api/apps/",
//         "Operational_Endpoint": "https://developer.okta.com/docs/reference/api/apps/#add-application:~:text=Add%20application-,POST,/api/v1/apps,-Adds%20a%20new",
//         "Credentials_type": "apikey",
//         "apikey": "p8uersF0RPC22aJ",
//         "schemaIds": [
//             "655f271b53f7d870cf3903d0",
//             "655f286659570d3e16625690",
//             "655f29cc3ca51327c2399986"
//         ],
//         "workflowIds": [],
//         "id": "OKTA Apps"
//     },
//     {
//         "Integration_Name": "Platform Queries",
//         "Integration_Description": "Allows platform queries including SQL statements for execution",
//         "API_reference": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
//         "Documentation": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
//         "Operational_Endpoint": "https://account_locator.snowflakecomputing.com/api/v2/statements",
//         "Credentials_type": "apikey",
//         "apikey": "4D2h1rmeqiqIVFn",
//         "schemaIds": [
//             "65673b7419b2493ebae3001b"
//         ],
//         "workflowIds": [],
//         "id": "Platform Queries"
//     }
// ],
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cde8291b707d34e93752d7/instances/list").reply(200, {
//   entities: [
//     {
//         "PlatformSchemas": [
//             {
//                 "integrations": [
//                     "BigQueryData",
//                     "CloudStorage",
//                     "Cost Analysis",
//                     "BigQuery_Pipeline"
//                 ],
//                 "platform_description": "BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale.",
//                 "platform_doc_url": "https://cloud.google.com/bigquery/docs/reference/rest",
//                 "platform_git_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/",
//                 "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654//8fbb7a03-9569-419d-a570-9261c1bb26f1_$$google_bigquery_logo_icon_168150.png",
//                 "platform_name": "BigQuery",
//                 "platform_tags": [],
//                 "platform_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/"
//             },
//             {
//                 "integrations": [
//                     "SystemLogs",
//                     "ApplicationOperations",
//                     "ApplicationUsers",
//                     "Okta_Pipeline"
//                 ],
//                 "platform_description": "Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we’ve got you covered.",
//                 "platform_doc_url": "https://developer.okta.com/docs/reference/",
//                 "platform_git_url": "https://github.com/okta/okta-sdk-java",
//                 "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654/116e802e-dedd-4522-ba96-1c420f6428af_$$okta_logo.png",
//                 "platform_name": "OKTA",
//                 "platform_tags": [],
//                 "platform_url": "https://www.okta.com/"
//             },
//             {
//                 "integrations": [
//                     "Account Usage",
//                     "Data Sharing Usage",
//                     "Organization Usage",
//                     "Snowflake_Pipeline"
//                 ],
//                 "platform_description": "Snowflake isn’t just a great technology company. We’re all about the data—easily enabling governed access to near-infinite amounts of data, and cutting-edge tools, applications, and services. With the Data Cloud, you can collaborate locally and globally to reveal new insights, create previously unforeseen business opportunities, and identify and know your customers in the moment with seamless and relevant experiences.",
//                 "platform_doc_url": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
//                 "platform_git_url": "",
//                 "platform_icon_url": "https://cdn.aidtaas.com/321ff654/designer/321t654/19aa38ec-cb60-44a8-8bc6-a0ea3fa356c7_$$SNOW.png",
//                 "platform_name": "Snowflake",
//                 "platform_tags": [],
//                 "platform_url": "https://www.snowflake.com/en/"
//             },
//             {
//                 "integrations": [
//                     "VirtualMachine",
//                     "StrorageAccount",
//                     "AzureCostAnalysis"
//                 ],
//                 "platform_description": "Build, manage, and monitor all your apps in Microsoft Azure Portal. A single, unified hub built for you, your team, and your projects.",
//                 "platform_doc_url": "https://learn.microsoft.com/en-us/azure/azure-portal/",
//                 "platform_git_url": "",
//                 "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/33add040-2d18-4937-84b6-0569e7aadff3",
//                 "platform_name": "Azure ",
//                 "platform_tags": [],
//                 "platform_url": "https://azure.microsoft.com/en/"
//             },
//             {
//                 "integrations": [
//                     "OpenAI Usage"
//                 ],
//                 "platform_description": "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
//                 "platform_doc_url": "https://platform.openai.com/docs/api-reference/introduction",
//                 "platform_git_url": "",
//                 "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/3e81b8f3-6d94-4ab9-8d1b-21812e24953e",
//                 "platform_name": "OpenAI",
//                 "platform_tags": [],
//                 "platform_url": "https://openai.com/"
//             }
//         ],
//         "id": "id"
//     }
// ],
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instances/list").reply(200, {
//   entities: [
    
// ],
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9500828ebd37244d9d489/instances/list").reply(200, {
//   entities: [
//     {
//            "UserId": "TestUser1",
//            "Username": "Test1",
           
//            "apilist": [
            
          
//             {
//                 "id": "department",
//                 "name": "department",
//                 "children": [
//                     {
//                         "id": "employee",
//                         "name": "employee",
//                         "children": [
//                             {
//                                 "id": "cost",
//                                 "name": "cost",
//                                 "children": [],
//                                 "selectedOutputParams": [],
//                                 "selectedWorkflows": [],
//                                 "description": "API description not found",
//                                 "selected": false,
//                                 "inputParams": {},
//                                 "outputParams": [
//                                     "expenditure",
//                                     "employeeId",
                                    
//                                 ],
//                                 "PathParams": {},
//                                 "body": {},
//                                 "Integration_Name": "sample",
//                                 "schemaID": "",
//                                 "selectedInputParams": {},
//                                 "selectedPathParams": {},
//                                 "selectedBody": {},
//                                 "outPutResponse": "4",
//                                 "outputParamsTag": {},
//                                 "indexes": {}
//                             },
//                             {
//                                 "id": "salary",
//                                 "name": "salary",
//                                 "children": [],
//                                 "selectedOutputParams": [],
//                                 "selectedWorkflows": [],
//                                 "description": "API description not found",
//                                 "selected": false,
//                                 "inputParams": {},
//                                 "outputParams": [
//                                     "salary",
//                                     "employeeId",
                                    
//                                 ],
//                                 "PathParams": {},
//                                 "body": {},
//                                 "Integration_Name": "sample",
//                                 "schemaID": "",
//                                 "selectedInputParams": {},
//                                 "selectedPathParams": {},
//                                 "selectedBody": {},
//                                 "outPutResponse": "4",
//                                 "outputParamsTag": {},
//                                 "indexes": {}
//                             }
                            
//                         ],
//                         "selectedOutputParams": [],
//                         "selectedWorkflows": [],
//                         "description": "API description not found",
//                         "selected": false,
//                         "inputParams": {},
//                         "outputParams": [
//                             "name",
//                             "employeeId",
//                             "departmentId",
//                             "joinDate",
//                             "designation"
//                         ],
//                         "PathParams": {},
//                         "body": {},
//                         "Integration_Name": "sample",
//                         "schemaID": "",
//                         "selectedInputParams": {},
//                         "selectedPathParams": {},
//                         "selectedBody": {},
//                         "outPutResponse": "2",
//                         "outputParamsTag": {},
//                         "indexes": {}
//                     }
//                 ],
//                 "selectedOutputParams": [],
//                 "selectedWorkflows": [],
//                 "description": "API description not found",
//                 "selected": false,
//                 "inputParams": {},
//                 "outputParams": [
//                     "name",
//                     "departmentId",
//                     "description"
//                 ],
//                 "PathParams": {},
//                 "body": {},
//                 "Integration_Name": "sample",
//                 "schemaID": "",
//                 "selectedInputParams": {},
//                 "selectedPathParams": {},
//                 "selectedBody": {},
//                 "outPutResponse": "3",
//                 "outputParamsTag": {},
//                 "indexes": {}
//             },
//                {
//                    "id": "VirtualMachineData",
//                    "name": "VirtualMachineData",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "cost"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "timespan": "string",
//                        "interval": "string",
//                        "metricnames": "string",
//                        "aggregation": "string",
//                        "api_version": "string"
//                    },
//                    "outputParams": [
//                        "cost",
//                        "timespan",
//                        "interval",
//                        "value",
//                        "namespace",
//                        "resourceregion"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "body": {},
//                    "Integration_Name": "VirtualMachine",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "SystemLogs",
//                    "name": "SystemLogs",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "actor"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "since": "",
//                        "q": ""
//                    },
//                    "outputParams": [
//                        "actor",
//                        "client",
//                        "device",
//                        "authenticationContext",
//                        "displayMessage",
//                        "eventType",
//                        "outcome",
//                        "published",
//                        "securityContext",
//                        "severity",
//                        "debugContext",
//                        "legacyEventType",
//                        "transaction",
//                        "uuid",
//                        "version",
//                        "request",
//                        "target"
//                    ],
//                    "PathParams": {
//                        "domain": "dev-69282603-admin.okta.com"
//                    },
//                    "body": {},
//                    "Integration_Name": "SystemLogs",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "domain": "dev-69282603-admin.okta.com"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                }, {
//                 "id": "SystemLogs",
//                 "name": "SystemLogs",
//                 "children": [],
//                 "selectedOutputParams": [
//                     "actor"
//                 ],
//                 "selectedWorkflows": [
//                     "purge workflow"
//                 ],
//                 "description": "API description not found",
//                 "selected": true,
//                 "inputParams": {
//                     "since": "",
//                     "q": ""
//                 },
//                 "outputParams": [
//                     "actor",
//                     "client",
//                     "device",
//                     "authenticationContext",
//                     "displayMessage",
//                     "eventType",
//                     "outcome",
//                     "published",
//                     "securityContext",
//                     "severity",
//                     "debugContext",
//                     "legacyEventType",
//                     "transaction",
//                     "uuid",
//                     "version",
//                     "request",
//                     "target"
//                 ],
//                 "PathParams": {
//                     "domain": "dev-69282603-admin.okta.com"
//                 },
//                 "body": {},
//                 "Integration_Name": "Okta_Pipeline",
//                 "schemaID": "",
//                 "selectedInputParams": {},
//                 "selectedPathParams": {
//                     "domain": "dev-69282603-admin.okta.com"
//                 },
//                 "selectedBody": {},
//                 "outPutResponse": ""
//             },
//                {
//                    "id": "FilteredLogs",
//                    "name": "FilteredLogs",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "actor",
//                        "client",
//                        "device",
//                        "authenticationContext",
//                        "displayMessage",
//                        "eventType",
//                        "outcome",
//                        "published",
//                        "securityContext",
//                        "severity",
//                        "debugContext",
//                        "legacyEventType",
//                        "transaction",
//                        "uuid",
//                        "version",
//                        "request",
//                        "target"
//                    ],
//                    "PathParams": {
//                        "since": "2024-03-04",
//                        "q": "Saikiran%20Gadupathi"
//                    },
//                    "body": {},
//                    "Integration_Name": "SystemLogs",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "since": "2024-03-04",
//                        "q": "Saikiran%20Gadupathi"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "Application_Users",
//                    "name": "Application_Users",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "0"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "0"
//                    ],
//                    "PathParams": {
//                        "app_id": "0oaf8annb5fGMKk9A5d7",
//                        "domain": "dev-69282603-admin.okta.com"
//                    },
//                    "body": {},
//                    "Integration_Name": "ApplicationUsers",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "app_id": "0oaf8annb5fGMKk9A5d7"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "ApplicationOperations",
//                    "name": "ApplicationOperations",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "id",
//                        "status"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "id",
//                        "name",
//                        "label",
//                        "status",
//                        "lastUpdated",
//                        "created",
//                        "accessibility",
//                        "visibility",
//                        "features",
//                        "signOnMode",
//                        "credentials",
//                        "settings",
//                        "_links"
//                    ],
//                    "PathParams": {
//                        "domain": "dev-69282603-admin.okta.com"
//                    },
//                    "body": {},
//                    "Integration_Name": "ApplicationOperations",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "q": "saikiran"
//                    },
//                    "selectedPathParams": {
//                        "domain": "dev-69282603-admin.okta.com"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": "65d2f9a61b707d34e93754cf",
//                    "outputParamsTag": {
//                        "id": "Mobius_PI_id",
//                        "status": "Mobius_PI_total_cost"
//                    }
//                },
//                {
//                    "id": "Snowflake DATA SHARING USAGE",
//                    "name": "Snowflake DATA SHARING USAGE",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "requestId",
//                        "createdOn"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "resultSetMetaData",
//                        "data",
//                        "code",
//                        "statementStatusUrl",
//                        "requestId",
//                        "sqlState",
//                        "statementHandle",
//                        "message",
//                        "createdOn"
//                    ],
//                    "PathParams": {
//                        "domain": ""
//                    },
//                    "body": {
//                        "statement": [
//                            {
//                                "name": "APPLICATION_STATE",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE"
//                            },
//                            {
//                                "name": "LISTING_ACCESS_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_ACCESS_HISTORY"
//                            },
//                            {
//                                "name": "LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY"
//                            },
//                            {
//                                "name": "LISTING_AUTO_FULFILLMENT_REFRESH_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_REFRESH_DAILY"
//                            },
//                            {
//                                "name": "LISTING_CONSUMPTION_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_CONSUMPTION_DAILY"
//                            },
//                            {
//                                "name": "LISTING_EVENTS_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_EVENTS_DAILY"
//                            },
//                            {
//                                "name": "MARKETPLACE_DISBURSEMENT_REPORT",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
//                            },
//                            {
//                                "name": "MARKETPLACE_PAID_USAGE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
//                            },
//                            {
//                                "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
//                            },
//                            {
//                                "name": "MONETIZED_USAGE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MONETIZED_USAGE_DAILY"
//                            }
//                        ],
//                        "timeout": "1000",
//                        "database": "GAIAN1",
//                        "schema": "TABLE1",
//                        "warehouse": "FIRST_WAREHOUSE",
//                        "role": "ACCOUNTADMIN"
//                    },
//                    "Integration_Name": "Data Sharing Usage",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "domain": "axoiihb-of84409"
//                    },
//                    "selectedBody": {
//                        "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
//                        "timeout": "1000",
//                        "database": "GAIAN1",
//                        "schema": "TABLE1",
//                        "warehouse": "FIRST_WAREHOUSE",
//                        "role": "ACCOUNTADMIN"
//                    },
//                    "outPutResponse": "",
//                    "outputParamsTag": {
//                        "resultSetMetaData": "Mobius_PI_rolling_avg_usage",
//                        "data": "Mobius_PI_avg_cost_per_usage",
//                        "code": "Mobius_PI_api_call_volume",
//                        "requestId": "Mobius_PI_id",
//                        "createdOn": "Mobius_PI_time"
//                    },
//                    "indexes": {
//                        "resultSetMetaData": "none",
//                        "data": "primary",
//                        "code": "secondary",
//                        "requestId": "primary",
//                        "createdOn": "primary"
//                    }
//                },
//                {
//                    "id": "Snowflake_Account_Usage",
//                    "name": "Snowflake_Account_Usage",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "USAGE_DATE",
//                        "STORAGE_BYTES"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "USAGE_DATE",
//                        "STORAGE_BYTES",
//                        "STAGE_BYTES",
//                        "FAILSAFE_BYTES",
//                        "HYBRID_TABLE_STORAGE_BYTES"
//                    ],
//                    "PathParams": {
//                        "domain": ""
//                    },
//                    "body": {
//                        "statement": [
//                            {
//                                "name": "ACCESS_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY"
//                            },
//                            {
//                                "name": "AGGREGATE_QUERY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATE_QUERY_HISTORY"
//                            },
//                            {
//                                "name": "AGGREGATION_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATION_POLICIES"
//                            },
//                            {
//                                "name": "ALERT_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ALERT_HISTORY"
//                            },
//                            {
//                                "name": "AUTOMATIC_CLUSTERING_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
//                            },
//                            {
//                                "name": "CLASSES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASSES"
//                            },
//                            {
//                                "name": "CLASS_INSTANCES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASS_INSTANCES"
//                            },
//                            {
//                                "name": "COLUMNS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COLUMNS"
//                            },
//                            {
//                                "name": "COMPLETE_TASK_GRAPHS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COMPLETE_TASK_GRAPHS"
//                            },
//                            {
//                                "name": "COPY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY"
//                            },
//                            {
//                                "name": "DATABASES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASES"
//                            },
//                            {
//                                "name": "DATABASE_REPLICATION_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_REPLICATION_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "DATABASE_STORAGE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "DATA_CLASSIFICATION_LATEST",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST"
//                            },
//                            {
//                                "name": "DATA_QUALITY_MONITORING_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_QUALITY_MONITORING_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "DATA_TRANSFER_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_TRANSFER_HISTORY"
//                            },
//                            {
//                                "name": "ELEMENT_TYPES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ELEMENT_TYPES"
//                            },
//                            {
//                                "name": "EVENT_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EVENT_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "EXTERNAL_ACCESS_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EXTERNAL_ACCESS_HISTORY"
//                            },
//                            {
//                                "name": "FIELDS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FIELDS"
//                            },
//                            {
//                                "name": "FILE_FORMATS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FILE_FORMATS"
//                            },
//                            {
//                                "name": "GRANTS_TO_ROLES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_ROLES"
//                            },
//                            {
//                                "name": "GRANTS_TO_USERS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_USERS"
//                            },
//                            {
//                                "name": "HYBRID_TABLE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.HYBRID_TABLE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "LOAD_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOAD_HISTORY"
//                            },
//                            {
//                                "name": "LOCK_WAIT_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOCK_WAIT_HISTORY"
//                            },
//                            {
//                                "name": "LOGIN_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY"
//                            },
//                            {
//                                "name": "MASKING_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MASKING_POLICIES"
//                            },
//                            {
//                                "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
//                            },
//                            {
//                                "name": "METERING_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "METERING_HISTORY                ",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_HISTORY"
//                            },
//                            {
//                                "name": "NETWORK_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_POLICIES"
//                            },
//                            {
//                                "name": "NETWORK_RULES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULES"
//                            },
//                            {
//                                "name": "NETWORK_RULE_REFERENCES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULE_REFERENCES"
//                            },
//                            {
//                                "name": "OBJECT_DEPENDENCIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.OBJECT_DEPENDENCIES"
//                            },
//                            {
//                                "name": "PASSWORD_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PASSWORD_POLICIES"
//                            },
//                            {
//                                "name": "PIPES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPES"
//                            },
//                            {
//                                "name": "PIPE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "POLICY_REFERENCES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.POLICY_REFERENCES"
//                            },
//                            {
//                                "name": "PROCEDURES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROCEDURES"
//                            },
//                            {
//                                "name": "PROJECTION_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROJECTION_POLICIES"
//                            },
//                            {
//                                "name": "QUERY_ACCELERATION_ELIGIBLE",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_ACCELERATION_ELIGIBLE"
//                            },
//                            {
//                                "name": "QUERY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY"
//                            },
//                            {
//                                "name": "REFERENTIAL_CONSTRAINTS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REFERENTIAL_CONSTRAINTS"
//                            },
//                            {
//                                "name": "REPLICATION_GROUP_REFRESH_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
//                            },
//                            {
//                                "name": "REPLICATION_GROUP_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "REPLICATION_GROUP_REFRESH_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
//                            },
//                            {
//                                "name": "REPLICATION_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "ROLES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROLES"
//                            },
//                            {
//                                "name": "ROW_ACCESS_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROW_ACCESS_POLICIES"
//                            },
//                            {
//                                "name": "SCHEMATA",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SCHEMATA"
//                            },
//                            {
//                                "name": "SEARCH_OPTIMIZATION_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SEARCH_OPTIMIZATION_HISTORY"
//                            },
//                            {
//                                "name": "SERVICES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SERVICES"
//                            },
//                            {
//                                "name": "SESSIONS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSIONS"
//                            },
//                            {
//                                "name": "SESSION_POLICIES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSION_POLICIES"
//                            },
//                            {
//                                "name": "SNOWPARK_CONTAINER_SERVICES_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPARK_CONTAINER_SERVICES_HISTORY"
//                            },
//                            {
//                                "name": "SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY"
//                            },
//                            {
//                                "name": "SNOWPIPE_STREAMING_CLIENT_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_CLIENT_HISTORY"
//                            },
//                            {
//                                "name": "STAGES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STAGES"
//                            },
//                            {
//                                "name": "STORAGE_USAGE",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
//                            },
//                            {
//                                "name": "TABLES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLES"
//                            },
//                            {
//                                "name": "TABLE_CONSTRAINTS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_CONSTRAINTS"
//                            },
//                            {
//                                "name": "TABLE_STORAGE_METRICS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS"
//                            },
//                            {
//                                "name": "TAGS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAGS"
//                            },
//                            {
//                                "name": "TAG_REFERENCES",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES"
//                            },
//                            {
//                                "name": "TASK_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY"
//                            },
//                            {
//                                "name": "TASK_VERSIONS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_VERSIONS"
//                            },
//                            {
//                                "name": "USERS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.USERS"
//                            },
//                            {
//                                "name": "VIEWS",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.VIEWS"
//                            },
//                            {
//                                "name": "WAREHOUSE_EVENTS_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_EVENTS_HISTORY"
//                            },
//                            {
//                                "name": "WAREHOUSE_LOAD_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_LOAD_HISTORY"
//                            },
//                            {
//                                "name": "WAREHOUSE_METERING_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY"
//                            }
//                        ]
//                    },
//                    "Integration_Name": "Account Usage",
//                    "schemaID": "660660c81574a22f5d1a1a74",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "domain": "axoiihb-of84409"
//                    },
//                    "selectedBody": {
//                        "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
//                    },
//                    "outPutResponse": "66065b931574a22f5d1a1a0e",
//                    "outputParamsTag": {
//                        "USAGE_DATE": "Mobius_PI_date",
//                        "STORAGE_BYTES": "Mobius_PI_total_usage"
//                    },
//                    "indexes": {
//                        "USAGE_DATE": "primary",
//                        "STORAGE_BYTES": "primary"
//                    }
//                },
//                {
//                    "id": "Snowflake_Organization_Usage",
//                    "name": "Snowflake_Organization_Usage",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "USAGE_DATE",
//                        "USAGE_TYPE"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "ORGANIZATION_NAME",
//                        "CONTRACT_NUMBER",
//                        "ACCOUNT_NAME",
//                        "ACCOUNT_LOCATOR",
//                        "REGION",
//                        "SERVICE_LEVEL",
//                        "USAGE_DATE",
//                        "USAGE_TYPE",
//                        "USAGE",
//                        "CURRENCY",
//                        "USAGE_IN_CURRENCY",
//                        "BALANCE_SOURCE",
//                        "BILLING_TYPE",
//                        "RATING_TYPE",
//                        "SERVICE_TYPE",
//                        "IS_ADJUSTMENT"
//                    ],
//                    "PathParams": {
//                        "domain": ""
//                    },
//                    "body": {
//                        "statement": [
//                            {
//                                "name": "ACCOUNTS",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
//                            },
//                            {
//                                "name": "AUTOMATIC_CLUSTERING_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
//                            },
//                            {
//                                "name": "CONTRACT_ITEMS",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.CONTRACT_ITEMS"
//                            },
//                            {
//                                "name": "DATABASE_STORAGE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "DATA_TRANSFER_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "MARKETPLACE_DISBURSEMENT_REPORT",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
//                            },
//                            {
//                                "name": "MARKETPLACE_PAID_USAGE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
//                            },
//                            {
//                                "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
//                            },
//                            {
//                                "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
//                            },
//                            {
//                                "name": "METERING_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.METERING_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "MONETIZED_USAGE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MONETIZED_USAGE_DAILY"
//                            },
//                            {
//                                "name": "PIPE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PIPE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "PREVIEW_CONTRACT_ITEMS",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_CONTRACT_ITEMS"
//                            },
//                            {
//                                "name": "PREVIEW_DATA_TRANSFER_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_DATA_TRANSFER_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "PREVIEW_METERING_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_METERING_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "PREVIEW_RATE_SHEET_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
//                            },
//                            {
//                                "name": "PREVIEW_REMAINING_BALANCE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
//                            },
//                            {
//                                "name": "PREVIEW_STORAGE_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_STORAGE_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "PREVIEW_USAGE_IN_CURRENCY_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_USAGE_IN_CURRENCY_DAILY"
//                            },
//                            {
//                                "name": "QUERY_ACCELERATION_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.QUERY_ACCELERATION_HISTORY"
//                            },
//                            {
//                                "name": "RATE_SHEET_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
//                            },
//                            {
//                                "name": "REMAINING_BALANCE_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
//                            },
//                            {
//                                "name": "REPLICATION_GROUP_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "REPLICATION_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "SEARCH_OPTIMIZATION_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
//                            },
//                            {
//                                "name": "STAGE_STORAGE_USAGE_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
//                            },
//                            {
//                                "name": "STORAGE_DAILY_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STORAGE_DAILY_HISTORY"
//                            },
//                            {
//                                "name": "USAGE_IN_CURRENCY_DAILY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//                            },
//                            {
//                                "name": "WAREHOUSE_METERING_HISTORY",
//                                "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY"
//                            }
//                        ]
//                    },
//                    "Integration_Name": "Organization Usage",
//                    "schemaID": "660692611574a22f5d1a1bf4",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "domain": "axoiihb-of84409"
//                    },
//                    "selectedBody": {
//                        "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//                    },
//                    "outPutResponse": "65fd1b231574a22f5d1a0d5c",
//                    "outputParamsTag": {},
//                    "indexes": {
//                        "USAGE_DATE": "primary",
//                        "USAGE_TYPE": "primary"
//                    }
//                },
//                {
//                 "id": "Snowflake Organization Usage",
//                 "name": "Snowflake Organization Usage",
//                 "children": [],
//                 "selectedOutputParams": [
//                     "USAGE_DATE",
//                     "USAGE_TYPE"
//                 ],
//                 "selectedWorkflows": [
//                     "purge workflow"
//                 ],
//                 "description": "API description not found",
//                 "selected": true,
//                 "inputParams": {},
//                 "outputParams": [
//                     "ORGANIZATION_NAME",
//                     "CONTRACT_NUMBER",
//                     "ACCOUNT_NAME",
//                     "ACCOUNT_LOCATOR",
//                     "REGION",
//                     "SERVICE_LEVEL",
//                     "USAGE_DATE",
//                     "USAGE_TYPE",
//                     "USAGE",
//                     "CURRENCY",
//                     "USAGE_IN_CURRENCY",
//                     "BALANCE_SOURCE",
//                     "BILLING_TYPE",
//                     "RATING_TYPE",
//                     "SERVICE_TYPE",
//                     "IS_ADJUSTMENT"
//                 ],
//                 "PathParams": {
//                     "domain": ""
//                 },
//                 "body": {
//                     "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//                 },
//                 "Integration_Name": "Snowflake_Pipeline",
//                 "schemaID": "660692611574a22f5d1a1bf4",
//                 "selectedInputParams": {},
//                 "selectedPathParams": {
//                     "domain": "axoiihb-of84409"
//                 },
//                 "selectedBody": {
//                     "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//                 },
//                 "outPutResponse": "65fd1b231574a22f5d1a0d5c",
//                 "outputParamsTag": {},
//                 "indexes": {
//                     "USAGE_DATE": "primary",
//                     "USAGE_TYPE": "primary"
//                 }
//             },
//                {
//                    "id": "GetProjectStorageDetails",
//                    "name": "GetProjectStorageDetails",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "creation_time",
//                        "last_modified_time",
//                        "catalog_name",
//                        "schema_name",
//                        "schema_owner"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "catalog_name",
//                        "schema_name",
//                        "schema_owner",
//                        "creation_time",
//                        "last_modified_time",
//                        "location",
//                        "ddl",
//                        "default_collation_name"
//                    ],
//                    "PathParams": {
//                        "projectId": "my-new-project-4-412310"
//                    },
//                    "body": {
//                        "query": "SELECT * FROM `my-new-project-4-412310.INFORMATION_SCHEMA.SCHEMATA`",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "BigQueryData",
//                    "schemaID": "6603ae591574a22f5d1a10f6",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "my-new-project-4-412310"
//                    },
//                    "selectedBody": {
//                        "query": "SELECT * FROM `my-new-project-4-412310.INFORMATION_SCHEMA.SCHEMATA`",
//                        "useLegacySql": "false"
//                    },
//                    "outPutResponse": "65fd17781574a22f5d1a0d43",
//                    "outputParamsTag": {
//                        "creation_time": "Mobius_PI_time",
//                        "last_modified_time": "Mobius_PI_peak_hour"
//                    },
//                    "indexes": {
//                        "creation_time": "primary",
//                        "last_modified_time": "primary"
//                    }
//                },
//                {
//                    "id": "GetTablesList",
//                    "name": "GetTablesList",
//                    "children": [
//                        {
//                            "id": "GetDataSetDetails",
//                            "name": "GetDataSetDetails",
//                            "children": [],
//                            "selectedOutputParams": [
//                                "id",
//                                "creationTime"
//                            ],
//                            "selectedWorkflows": [
//                                "purge workflow"
//                            ],
//                            "description": "API description not found",
//                            "selected": true,
//                            "inputParams": {},
//                            "outputParams": [
//                                "kind",
//                                "etag",
//                                "id",
//                                "selfLink",
//                                "datasetReference",
//                                "defaultTableExpirationMs",
//                                "access",
//                                "creationTime",
//                                "lastModifiedTime",
//                                "location",
//                                "defaultPartitionExpirationMs",
//                                "type",
//                                "isCaseInsensitive",
//                                "maxTimeTravelHours",
//                                "storageBillingModel"
//                            ],
//                            "PathParams": {
//                                "projectId": "my-new-project-4-412310",
//                                "datasetId": "dataset4"
//                            },
//                            "body": {},
//                            "Integration_Name": "BigQueryData",
//                            "schemaID": "6603e7471574a22f5d1a11ee",
//                            "selectedInputParams": {},
//                            "selectedPathParams": {
//                                "projectId": "my-new-project-4-412310",
//                                "datasetId": "dataset4"
//                            },
//                            "selectedBody": {},
//                            "outPutResponse": "65cc59061b707d34e9375158",
//                            "outputParamsTag": {
//                                "id": "Mobius_PI_id",
//                                "creationTime": "Mobius_PI_total_cost"
//                            },
//                            "indexes": {
//                                "id": "primary",
//                                "creationTime": "primary"
//                            }
//                        }
//                    ],
//                    "selectedOutputParams": [
//                        "kind",
//                        "totalItems"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "kind",
//                        "etag",
//                        "tables",
//                        "totalItems"
//                    ],
//                    "PathParams": {
//                        "projectId": "my-new-project-4-412310",
//                        "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
//                    },
//                    "body": {},
//                    "Integration_Name": "BigQueryData",
//                    "schemaID": "",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "my-new-project-4-412310",
//                        "datasetId": "dataset4"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": "65cb674c1b707d34e9375023",
//                    "outputParamsTag": {},
//                    "indexes": {
//                        "kind": "primary",
//                        "totalItems": "primary"
//                    }
//                },
//                {
//                 "id": "GetTablesList",
//                 "name": "GetTablesList",
//                 "children": [
//                     {
//                         "id": "GetDataSetDetails",
//                         "name": "GetDataSetDetails",
//                         "children": [],
//                         "selectedOutputParams": [
//                             "id",
//                             "creationTime"
//                         ],
//                         "selectedWorkflows": [
//                             "purge workflow"
//                         ],
//                         "description": "API description not found",
//                         "selected": true,
//                         "inputParams": {},
//                         "outputParams": [
//                             "kind",
//                             "etag",
//                             "id",
//                             "selfLink",
//                             "datasetReference",
//                             "defaultTableExpirationMs",
//                             "access",
//                             "creationTime",
//                             "lastModifiedTime",
//                             "location",
//                             "defaultPartitionExpirationMs",
//                             "type",
//                             "isCaseInsensitive",
//                             "maxTimeTravelHours",
//                             "storageBillingModel"
//                         ],
//                         "PathParams": {
//                             "projectId": "my-new-project-4-412310",
//                             "datasetId": "dataset4"
//                         },
//                         "body": {},
//                         "Integration_Name": "BigQueryData",
//                         "schemaID": "6603e7471574a22f5d1a11ee",
//                         "selectedInputParams": {},
//                         "selectedPathParams": {
//                             "projectId": "my-new-project-4-412310",
//                             "datasetId": "dataset4"
//                         },
//                         "selectedBody": {},
//                         "outPutResponse": "65cc59061b707d34e9375158",
//                         "outputParamsTag": {
//                             "id": "Mobius_PI_id",
//                             "creationTime": "Mobius_PI_total_cost"
//                         },
//                         "indexes": {
//                             "id": "primary",
//                             "creationTime": "primary"
//                         }
//                     }
//                 ],
//                 "selectedOutputParams": [
//                     "kind",
//                     "totalItems"
//                 ],
//                 "selectedWorkflows": [
//                     "purge workflow"
//                 ],
//                 "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
//                 "selected": true,
//                 "inputParams": {},
//                 "outputParams": [
//                     "kind",
//                     "etag",
//                     "tables",
//                     "totalItems"
//                 ],
//                 "PathParams": {
//                     "projectId": "my-new-project-4-412310",
//                     "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
//                 },
//                 "body": {},
//                 "Integration_Name": "BigQuery_Pipeline",
//                 "schemaID": "",
//                 "selectedInputParams": {},
//                 "selectedPathParams": {
//                     "projectId": "my-new-project-4-412310",
//                     "datasetId": "dataset4"
//                 },
//                 "selectedBody": {},
//                 "outPutResponse": "65cb674c1b707d34e9375023",
//                 "outputParamsTag": {},
//                 "indexes": {
//                     "kind": "primary",
//                     "totalItems": "primary"
//                 }
//             },
//                {
//                    "id": "OpenAI_Activities",
//                    "name": "OpenAI_Activities",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "organization_id",
//                        "object",
//                        "data",
//                        "ft_data",
//                        "dalle_api_data",
//                        "whisper_api_data"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "end_date": "2024-03-01",
//                        "start_date": "2024-02-01"
//                    },
//                    "outputParams": [
//                        "object",
//                        "data",
//                        "ft_data",
//                        "dalle_api_data",
//                        "whisper_api_data",
//                        "tts_api_data",
//                        "assistant_code_interpreter_data"
//                    ],
//                    "PathParams": {},
//                    "body": {},
//                    "Integration_Name": "OpenAI Usage",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "end_date": "2024-03-14",
//                        "start_date": "2024-03-12"
//                    },
//                    "selectedPathParams": {},
//                    "selectedBody": {},
//                    "outPutResponse": "",
//                    "outputParamsTag": {
//                        "organization_id": "Mobius_PI_total_usage",
//                        "object": "Mobius_PI_rolling_avg_usage",
//                        "data": "Mobius_PI_id",
//                        "ft_data": "Mobius_PI_api_call_volume"
//                    },
//                    "indexes": {
//                        "organization_id": "secondary",
//                        "object": "secondary",
//                        "data": "secondary"
//                    }
//                },
//                {
//                    "id": "billing usage",
//                    "name": "billing usage",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "end_date": "2024-03-01",
//                        "start_date": "2024-02-01"
//                    },
//                    "outputParams": [
//                        "object",
//                        "daily_costs",
//                        "total_usage"
//                    ],
//                    "PathParams": {},
//                    "body": {},
//                    "Integration_Name": "OpenAI Usage",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "end_date": "2024-03-12",
//                        "start_date": "2024-01-01"
//                    },
//                    "selectedPathParams": {},
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "CostbyResourceGroupName",
//                    "name": "CostbyResourceGroupName",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "api_version": "2021-10-01"
//                    },
//                    "outputParams": [
//                        "Cost",
//                        "CostUSD",
//                        "UsageDate",
//                        "ResourceGroupName",
//                        "Currency",
//                        "timestamp"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "body": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                },
//                                "totalCostUSD": {
//                                    "name": "CostUSD",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "grouping": [
//                                {
//                                    "type": "Dimension",
//                                    "name": "ResourceGroupName"
//                                }
//                            ]
//                        },
//                        "timeframe": "Custom",
//                        "timePeriod": {
//                            "from": "2024-02-13T00:00:00+00:00",
//                            "to": "2024-02-14T23:59:59+00:00"
//                        }
//                    },
//                    "Integration_Name": "AzureCostAnalysis",
//                    "schemaID": "6606c6711574a22f5d1a1dc2",
//                    "selectedInputParams": {
//                        "api_version": "2021-10-01"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "selectedBody": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                },
//                                "totalCostUSD": {
//                                    "name": "CostUSD",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "grouping": [
//                                {
//                                    "type": "Dimension",
//                                    "name": "ResourceGroupName"
//                                }
//                            ]
//                        },
//                        "timeframe": "Custom",
//                        "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
//                    },
//                    "outPutResponse": "6606c52b1574a22f5d1a1da5",
//                    "outputParamsTag": {
//                        "CostUSD": "Mobius_PI_total_cost"
//                    },
//                    "indexes": {
//                        "UsageDate": "primary",
//                        "timestamp": "primary"
//                    }
//                },
//                {
//                    "id": "ForecastedCostData",
//                    "name": "ForecastedCostData",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "api_version": "2021-10-01",
//                        "_24top": "5000"
//                    },
//                    "outputParams": [
//                        "Cost",
//                        "UsageDate",
//                        "CostStatus",
//                        "Currency",
//                        "timestamp"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "body": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "filter": {
//                                "Dimensions": {
//                                    "Name": "PublisherType",
//                                    "Operator": "In",
//                                    "Values": [
//                                        "azure"
//                                    ]
//                                }
//                            }
//                        },
//                        "includeActualCost": true,
//                        "includeFreshPartialCost": false,
//                        "timePeriod": {
//                            "from": "2024-02-10T00:00:00+00:00",
//                            "to": "2024-02-19T23:59:59+00:00"
//                        }
//                    },
//                    "Integration_Name": "AzureCostAnalysis",
//                    "schemaID": "6606a7a71574a22f5d1a1ca2",
//                    "selectedInputParams": {
//                        "api_version": "2021-10-01",
//                        "_24top": "5000"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "selectedBody": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "filter": {
//                                "Dimensions": {
//                                    "Name": "PublisherType",
//                                    "Operator": "In",
//                                    "Values": [
//                                        "azure"
//                                    ]
//                                }
//                            }
//                        },
//                        "includeActualCost": true,
//                        "includeFreshPartialCost": false,
//                        "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
//                    },
//                    "outPutResponse": "660699a21574a22f5d1a1c87",
//                    "outputParamsTag": {
//                        "UsageDate": "Mobius_PI_date",
//                        "timestamp": "Mobius_PI_time"
//                    },
//                    "indexes": {
//                        "UsageDate": "primary",
//                        "timestamp": "primary"
//                    }
//                },
//                {
//                    "id": "CostbyServiceName",
//                    "name": "CostbyServiceName",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "UsageDate",
//                        "timestamp"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "api_version": "2021-10-01",
//                        "top": "5000"
//                    },
//                    "outputParams": [
//                        "Cost",
//                        "CostUSD",
//                        "UsageDate",
//                        "ServiceName",
//                        "Currency",
//                        "timestamp"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": ""
//                    },
//                    "body": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                },
//                                "totalCostUSD": {
//                                    "name": "CostUSD",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "grouping": [
//                                {
//                                    "type": "Dimension",
//                                    "name": "ServiceName"
//                                }
//                            ]
//                        },
//                        "timeframe": "Custom",
//                        "timePeriod": {
//                            "from": "2024-02-13T00:00:00+00:00",
//                            "to": "2024-02-14T23:59:59+00:00"
//                        }
//                    },
//                    "Integration_Name": "AzureCostAnalysis",
//                    "schemaID": "660a625b1574a22f5d1a1f20",
//                    "selectedInputParams": {
//                        "api_version": "2021-10-01",
//                        "top": "5000"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "selectedBody": {
//                        "type": "ActualCost",
//                        "dataSet": {
//                            "granularity": "Daily",
//                            "aggregation": {
//                                "totalCost": {
//                                    "name": "Cost",
//                                    "function": "Sum"
//                                },
//                                "totalCostUSD": {
//                                    "name": "CostUSD",
//                                    "function": "Sum"
//                                }
//                            },
//                            "sorting": [
//                                {
//                                    "direction": "ascending",
//                                    "name": "UsageDate"
//                                }
//                            ],
//                            "grouping": [
//                                {
//                                    "type": "Dimension",
//                                    "name": "ServiceName"
//                                }
//                            ]
//                        },
//                        "timeframe": "Custom",
//                        "timePeriod": {
//                            "from": "2024-02-13T00:00:00+00:00",
//                            "to": "2024-02-14T23:59:59+00:00"
//                        }
//                    },
//                    "outPutResponse": "660a5f4c1574a22f5d1a1f1d",
//                    "outputParamsTag": {
//                        "UsageDate": "Mobius_PI_date",
//                        "timestamp": "Mobius_PI_time"
//                    },
//                    "indexes": {
//                        "UsageDate": "primary",
//                        "timestamp": "primary"
//                    }
//                },
//                {
//                    "id": "StorageActivityLogs",
//                    "name": "StorageActivityLogs",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
//                        "api_version": "2015-04-01"
//                    },
//                    "outputParams": [
//                        "value"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "body": {},
//                    "Integration_Name": "StrorageAccount",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
//                        "api_version": "2015-04-01"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "StorageUsageDetails",
//                    "name": "StorageUsageDetails",
//                    "children": [],
//                    "selectedOutputParams": [],
//                    "selectedWorkflows": [
//                        "ingestion workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "api_version": "2019-07-01"
//                    },
//                    "outputParams": [
//                        "value"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
//                    },
//                    "body": {},
//                    "Integration_Name": "StrorageAccount",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "api_version": "2017-11-30"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "StorageIngress",
//                    "name": "StorageIngress",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "cost",
//                        "timespan"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-02-09T07%3A05%3A00.000Z",
//                        "interval": "PT5M",
//                        "metricnames": "Ingress",
//                        "aggregation": "total",
//                        "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                        "autoadjusttimegrain": true,
//                        "validatedimensions": false
//                    },
//                    "outputParams": [
//                        "cost",
//                        "timespan",
//                        "interval",
//                        "value",
//                        "namespace",
//                        "resourceregion"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01",
//                        "storageAccountName": "mohammedsaleem",
//                        "api_version": "2019-07-01"
//                    },
//                    "body": {},
//                    "Integration_Name": "StrorageAccount",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
//                        "interval": "PT5M",
//                        "metricnames": "Ingress",
//                        "aggregation": "total",
//                        "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                        "autoadjusttimegrain": true,
//                        "validatedimensions": false,
//                        "api_version": "2019-07-01"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": "",
//                    "outputParamsTag": {
//                        "cost": "Mobius_PI_total_cost",
//                        "timespan": "Mobius_PI_time"
//                    },
//                    "indexes": {
//                        "cost": "primary",
//                        "timespan": "primary"
//                    }
//                },
//                {
//                    "id": "UsedCapacity",
//                    "name": "UsedCapacity",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "cost",
//                        "timespan"
//                    ],
//                    "selectedWorkflows": [],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "timespan": "2000-01-13%2F2024-04-01",
//                        "interval": "PT1H",
//                        "metricnames": "UsedCapacity",
//                        "aggregation": "average",
//                        "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                        "validatedimensions": "false",
//                        "api-version": "2019-07-01"
//                    },
//                    "outputParams": [
//                        "cost",
//                        "timespan",
//                        "interval",
//                        "value",
//                        "namespace",
//                        "resourceregion"
//                    ],
//                    "PathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
//                        "resourceGroupName": "edo"
//                    },
//                    "body": {},
//                    "Integration_Name": "StrorageAccount",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "timespan": "2000-01-13%2F2024-04-01",
//                        "interval": "PT1H",
//                        "metricnames": "UsedCapacity",
//                        "aggregation": "average",
//                        "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                        "validatedimensions": "false",
//                        "api-version": "2019-07-01"
//                    },
//                    "selectedPathParams": {
//                        "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
//                        "resourceGroupName": "edo"
//                    },
//                    "selectedBody": {},
//                    "outPutResponse": "660a96c61574a22f5d1a205f",
//                    "outputParamsTag": {},
//                    "indexes": {}
//                },
//                {
//                    "id": "GetBucketDetails",
//                    "name": "GetBucketDetails",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "kind"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow",
//                        "ingestion workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "projection": "full"
//                    },
//                    "outputParams": [
//                        "kind",
//                        "items"
//                    ],
//                    "PathParams": {
//                        "bucketName": "gaianbucket"
//                    },
//                    "body": {},
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "projection": "full",
//                        "bucketName": "gaianbucket"
//                    },
//                    "selectedPathParams": {},
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "GetBucketList",
//                    "name": "GetBucketList",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "kind",
//                        "items"
//                    ],
//                    "selectedWorkflows": [
//                        "ingestion workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {
//                        "project": "magnetic-nimbus-414111",
//                        "bucketName": "gaianbucket"
//                    },
//                    "outputParams": [
//                        "kind",
//                        "items"
//                    ],
//                    "PathParams": {},
//                    "body": {},
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "",
//                    "selectedInputParams": {
//                        "project": "magnetic-nimbus-414111",
//                        "bucketName": "gaianbucket"
//                    },
//                    "selectedPathParams": {},
//                    "selectedBody": {},
//                    "outPutResponse": ""
//                },
//                {
//                    "id": "Project Storage",
//                    "name": "Project Storage",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "timestamp",
//                        "total_logical_bytes",
//                        "project_id"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "project_id",
//                        "total_logical_bytes",
//                        "timestamp"
//                    ],
//                    "PathParams": {
//                        "projectId": ""
//                    },
//                    "body": {
//                        "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "660515fe1574a22f5d1a145b",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "magnetic-nimbus-414111"
//                    },
//                    "selectedBody": {
//                        "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
//                        "useLegacySql": "false"
//                    },
//                    "outPutResponse": "65fbf7b71574a22f5d1a0a82",
//                    "outputParamsTag": {
//                        "project_id": "Mobius_PI_api_call_volume",
//                        "total_logical_bytes": "Mobius_PI_storage_growth"
//                    },
//                    "indexes": {
//                        "timestamp": "primary",
//                        "total_logical_bytes": "primary"
//                    }
//                },
//                {
//                    "id": "TableStorageUsageTimeLine",
//                    "name": "TableStorageUsageTimeLine",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "project_id",
//                        "table_name"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "usage_date",
//                        "project_id",
//                        "table_catalog",
//                        "project_number",
//                        "table_schema",
//                        "table_name",
//                        "billable_total_logical_usage",
//                        "billable_active_logical_usage",
//                        "billable_long_term_logical_usage",
//                        "billable_total_physical_usage",
//                        "billable_active_physical_usage",
//                        "billable_long_term_physical_usage"
//                    ],
//                    "PathParams": {
//                        "projectId": ""
//                    },
//                    "body": {
//                        "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "6602c73b1574a22f5d1a1010",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "magnetic-nimbus-414111"
//                    },
//                    "selectedBody": {
//                        "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
//                        "useLegacySql": "false"
//                    },
//                    "outPutResponse": "65fd15e11574a22f5d1a0d36",
//                    "outputParamsTag": {},
//                    "indexes": {
//                        "project_id": "primary",
//                        "table_name": "primary"
//                    }
//                },
//                {
//                    "id": "Tables Storage",
//                    "name": "Tables Storage",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "table_name",
//                        "project_id"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "project_id",
//                        "project_number",
//                        "table_catalog",
//                        "table_schema",
//                        "table_name",
//                        "creation_time",
//                        "total_rows",
//                        "total_partitions",
//                        "total_logical_bytes",
//                        "active_logical_bytes",
//                        "long_term_logical_bytes",
//                        "current_physical_bytes",
//                        "total_physical_bytes",
//                        "active_physical_bytes",
//                        "long_term_physical_bytes",
//                        "time_travel_physical_bytes",
//                        "storage_last_modified_time",
//                        "deleted",
//                        "table_type",
//                        "fail_safe_physical_bytes",
//                        "last_metadata_refresh_time"
//                    ],
//                    "PathParams": {
//                        "projectId": ""
//                    },
//                    "body": {
//                        "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "6602c6c61574a22f5d1a1007",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": ""
//                    },
//                    "selectedBody": {
//                        "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
//                        "useLegacySql": false
//                    },
//                    "outPutResponse": "65fc02571574a22f5d1a0aac",
//                    "outputParamsTag": {},
//                    "indexes": {
//                        "table_name": "primary",
//                        "project_id": "primary"
//                    }
//                },
//                {
//                    "id": "Forecast Storage Billing",
//                    "name": "Forecast Storage Billing",
//                    "children": [],
//                    "selectedOutputParams": [
//                        "dataset_name",
//                        "active_physical_gib"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "dataset_name",
//                        "active_logical_gib",
//                        "long_term_logical_gib",
//                        "active_physical_gib",
//                        "long_term_physical_gib",
//                        "time_travel_physical_gib",
//                        "fail_safe_physical_gib",
//                        "active_compression_ratio",
//                        "long_term_compression_ratio",
//                        "forecast_active_logical_cost",
//                        "forecast_long_term_logical_cost",
//                        "forecast_active_physical_cost",
//                        "forecast_long_term_physical_cost",
//                        "forecast_total_cost_difference"
//                    ],
//                    "PathParams": {
//                        "projectId": ""
//                    },
//                    "body": {
//                        "query": "DECLARE active_logical_gib_price FLOAT64 DEFAULT 0.02; DECLARE long_term_logical_gib_price FLOAT64 DEFAULT 0.01; DECLARE active_physical_gib_price FLOAT64 DEFAULT 0.04; DECLARE long_term_physical_gib_price FLOAT64 DEFAULT 0.02; WITH storage_sizes AS ( SELECT table_schema AS dataset_name, SUM(IF(deleted=false, active_logical_bytes, 0)) / power(1024, 3) AS active_logical_gib, SUM(IF(deleted=false, long_term_logical_bytes, 0)) / power(1024, 3) AS long_term_logical_gib, SUM(active_physical_bytes) / power(1024, 3) AS active_physical_gib, SUM(active_physical_bytes - time_travel_physical_bytes) / power(1024, 3) AS active_no_tt_physical_gib, SUM(long_term_physical_bytes) / power(1024, 3) AS long_term_physical_gib, SUM(time_travel_physical_bytes) / power(1024, 3) AS time_travel_physical_gib, SUM(fail_safe_physical_bytes) / power(1024, 3) AS fail_safe_physical_gib, FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_BY_PROJECT WHERE total_physical_bytes > 0 AND table_type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset_name, ROUND(active_logical_gib, 2) AS active_logical_gib, ROUND(long_term_logical_gib, 2) AS long_term_logical_gib, ROUND(active_physical_gib, 2) AS active_physical_gib, ROUND(long_term_physical_gib, 2) AS long_term_physical_gib, ROUND(time_travel_physical_gib, 2) AS time_travel_physical_gib, ROUND(fail_safe_physical_gib, 2) AS fail_safe_physical_gib, ROUND(SAFE_DIVIDE(active_logical_gib, active_no_tt_physical_gib), 2) AS active_compression_ratio, ROUND(SAFE_DIVIDE(long_term_logical_gib, long_term_physical_gib), 2) AS long_term_compression_ratio, ROUND(active_logical_gib * active_logical_gib_price, 2) AS forecast_active_logical_cost, ROUND(long_term_logical_gib * long_term_logical_gib_price, 2) AS forecast_long_term_logical_cost, ROUND((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price, 2) AS forecast_active_physical_cost, ROUND(long_term_physical_gib * long_term_physical_gib_price, 2) AS forecast_long_term_physical_cost, ROUND(((active_logical_gib * active_logical_gib_price) + (long_term_logical_gib * long_term_logical_gib_price)) - (((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price) + (long_term_physical_gib * long_term_physical_gib_price)), 2) AS forecast_total_cost_difference FROM storage_sizes ORDER BY (forecast_active_logical_cost + forecast_active_physical_cost) DESC;",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "CloudStorage",
//                    "schemaID": "6602c4741574a22f5d1a0fff",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "magnetic-nimbus-414111"
//                    },
//                    "selectedBody": {
//                        "query": "DECLARE active_logical_gib_price FLOAT64 DEFAULT 0.02; DECLARE long_term_logical_gib_price FLOAT64 DEFAULT 0.01; DECLARE active_physical_gib_price FLOAT64 DEFAULT 0.04; DECLARE long_term_physical_gib_price FLOAT64 DEFAULT 0.02; WITH storage_sizes AS ( SELECT table_schema AS dataset_name, SUM(IF(deleted=false, active_logical_bytes, 0)) / power(1024, 3) AS active_logical_gib, SUM(IF(deleted=false, long_term_logical_bytes, 0)) / power(1024, 3) AS long_term_logical_gib, SUM(active_physical_bytes) / power(1024, 3) AS active_physical_gib, SUM(active_physical_bytes - time_travel_physical_bytes) / power(1024, 3) AS active_no_tt_physical_gib, SUM(long_term_physical_bytes) / power(1024, 3) AS long_term_physical_gib, SUM(time_travel_physical_bytes) / power(1024, 3) AS time_travel_physical_gib, SUM(fail_safe_physical_bytes) / power(1024, 3) AS fail_safe_physical_gib, FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_BY_PROJECT WHERE total_physical_bytes > 0 AND table_type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset_name, ROUND(active_logical_gib, 2) AS active_logical_gib, ROUND(long_term_logical_gib, 2) AS long_term_logical_gib, ROUND(active_physical_gib, 2) AS active_physical_gib, ROUND(long_term_physical_gib, 2) AS long_term_physical_gib, ROUND(time_travel_physical_gib, 2) AS time_travel_physical_gib, ROUND(fail_safe_physical_gib, 2) AS fail_safe_physical_gib, ROUND(SAFE_DIVIDE(active_logical_gib, active_no_tt_physical_gib), 2) AS active_compression_ratio, ROUND(SAFE_DIVIDE(long_term_logical_gib, long_term_physical_gib), 2) AS long_term_compression_ratio, ROUND(active_logical_gib * active_logical_gib_price, 2) AS forecast_active_logical_cost, ROUND(long_term_logical_gib * long_term_logical_gib_price, 2) AS forecast_long_term_logical_cost, ROUND((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price, 2) AS forecast_active_physical_cost, ROUND(long_term_physical_gib * long_term_physical_gib_price, 2) AS forecast_long_term_physical_cost, ROUND(((active_logical_gib * active_logical_gib_price) + (long_term_logical_gib * long_term_logical_gib_price)) - (((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price) + (long_term_physical_gib * long_term_physical_gib_price)), 2) AS forecast_total_cost_difference FROM storage_sizes ORDER BY (forecast_active_logical_cost + forecast_active_physical_cost) DESC;",
//                        "useLegacySql": "false"
//                    },
//                    "outPutResponse": "65fd14c21574a22f5d1a0d30",
//                    "outputParamsTag": {},
//                    "indexes": {
//                        "dataset_name": "primary",
//                        "active_physical_gib": "primary"
//                    }
//                },
              
//                {
//                    "id": "DailyProjectCost",
//                    "name": "DailyProjectCost",
//                    "children": [   {
//                     "id": "BillingReport",
//                     "name": "BillingReport",
//                     "children": [  ],
//                     "selectedOutputParams": [
//                     ],
//                     "selectedWorkflows": [
//                         "ingestion workflow"
//                     ],
//                     "description": "API description not found",
//                     "selected": true,
//                     "inputParams": {},
//                     "outputParams": [
//                         "invoice_date",
//                         "name",
//                         "description",
//                         "daily_cost_inr",
//                         "daily_credits",
//                         "timestamp"
//                     ],
//                     "PathParams": {
//                         "projectId": ""
//                     },
//                     "body": {
//                         "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
//                         "useLegacySql": false
//                     },
//                     "Integration_Name": "Cost Analysis",
//                     "schemaID": "",
//                     "selectedInputParams": {},
//                     "selectedPathParams": {
//                         "projectId": "magnetic-nimbus-414111"
//                     },
//                     "selectedBody": {
//                         "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
//                         "useLegacySql": "false"
//                     },
//                     "outPutResponse": "660aac7e1574a22f5d1a2135",
//                     "outputParamsTag": {},
//                     "indexes": {}
//                 },
//                 {
//                  "id": "GetCostUsage",
//                  "name": "GetCostUsage",
//                  "children": [],
//                  "selectedOutputParams": [
//                      "total_cost",
//                      "description"
//                  ],
//                  "selectedWorkflows": [
//                      "purge workflow"
//                  ],
//                  "description": "API description not found",
//                  "selected": true,
//                  "inputParams": {},
//                  "outputParams": [
//                      "name",
//                      "description",
//                      "project_labels",
//                      "total_cost",
//                      "total_credits"
//                  ],
//                  "PathParams": {
//                      "projectId": ""
//                  },
//                  "body": {
//                      "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
//                      "useLegacySql": false
//                  },
//                  "Integration_Name": "Cost Analysis",
//                  "schemaID": "660a99331574a22f5d1a2075",
//                  "selectedInputParams": {},
//                  "selectedPathParams": {
//                      "projectId": "magnetic-nimbus-414111"
//                  },
//                  "selectedBody": {
//                      "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
//                      "useLegacySql": "false"
//                  },
//                  "outPutResponse": "65e5bc9228ebd37244d9b2c1",
//                  "outputParamsTag": {},
//                  "indexes": {
//                      "total_cost": "primary",
//                      "description": "primary",
//                      "total_credits":"secondary"
//                  }
//              }],
//                    "selectedOutputParams": [
//                        "totalBytesProcessed",
//                        "queryId"
//                    ],
//                    "selectedWorkflows": [
//                        "purge workflow"
//                    ],
//                    "description": "API description not found",
//                    "selected": true,
//                    "inputParams": {},
//                    "outputParams": [
//                        "kind",
//                        "schema",
//                        "jobReference",
//                        "totalRows",
//                        "rows",
//                        "totalBytesProcessed",
//                        "jobComplete",
//                        "cacheHit",
//                        "queryId",
//                        "jobCreationReason"
//                    ],
//                    "PathParams": {
//                        "projectId": "magnetic-nimbus-414111"
//                    },
//                    "body": {
//                        "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
//                        "useLegacySql": false
//                    },
//                    "Integration_Name": "Cost Analysis",
//                    "schemaID": "660aa27b1574a22f5d1a20e3",
//                    "selectedInputParams": {},
//                    "selectedPathParams": {
//                        "projectId": "magnetic-nimbus-414111"
//                    },
//                    "selectedBody": {
//                        "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
//                        "useLegacySql": false
//                    },
//                    "outPutResponse": "65f3f0415f353406a916e714",
//                    "indexes": {
//                        "totalBytesProcessed": "primary",
//                        "queryId": "primary"
//                    }
//                },
            
             
//            ],
//            "id": "TestUser1"
//        }
// ]
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list").reply(200, {
//   entities: [
//     {
//       "UserId": "TestUser1",
//       "Username": "Test1",
//       "selectedlist": [
//         {
//             "id": "cost",
//             "name": "cost",
//             "children": [],
//             "selectedOutputParams": ["expenditure","employeeId"],
//             "selectedWorkflows": [],
//             "description": "API description not found",
//             "selected": true,
//             "inputParams": {},
//             "outputParams": [
//                "employeeId","expenditure"
//             ],
//             "PathParams": {},
//             "body": {},
//             "Integration_Name": "sample",
//             "schemaID": "",
//             "selectedInputParams": {},
//             "selectedPathParams": {},
//             "selectedBody": {},
//             "outPutResponse": "1",
//             "outputParamsTag": {},
//             "indexes": {
//                 "employeeId":"secondary"
//             }
//         },
        
   
//     {
//         "id": "department",
//         "name": "department",
//         "children": [],
//         "selectedOutputParams": ["name"],
//         "selectedWorkflows": [],
//         "description": "API description not found",
//         "selected": true,
//         "inputParams": {},
//         "outputParams": [
//             "name",
//             "departmentId",
//             "description"
//         ],
//         "PathParams": {},
//         "body": {},
//         "Integration_Name": "sample",
//         "schemaID": "",
//         "selectedInputParams": {},
//         "selectedPathParams": {},
//         "selectedBody": {},
//         "outPutResponse": "3",
//         "outputParamsTag": {},
//         "indexes": {}
//     },
//     {
//         "id": "employee",
//         "name": "employee",
//         "children": [],
//         "selectedOutputParams": ["name","departmentId","designation","employeeId"],
//         "selectedWorkflows": [],
//         "description": "API description not found",
//         "selected": true,
//         "inputParams": {},
//         "outputParams": [
//             "name",
//             "employeeId",
//             "departmentId",
//             "joinDate",
//             "designation"
//         ],
//         "PathParams": {},
//         "body": {},
//         "Integration_Name": "sample",
//         "schemaID": "",
//         "selectedInputParams": {},
//         "selectedPathParams": {},
//         "selectedBody": {},
//         "outPutResponse": "2",
//         "outputParamsTag": {},
//         "indexes": {
//             "departmentId":"secondary"
//         }
//     },
//     {
//         "id": "salary",
//         "name": "salary",
//         "children": [],
//         "selectedOutputParams": ["employeeId","salary"],
//         "selectedWorkflows": [],
//         "description": "API description not found",
//         "selected": true,
//         "inputParams": {},
//         "outputParams": [
//             "salary",
//             "employeeId"
        
//         ],
//         "PathParams": {},
//         "body": {},
//         "Integration_Name": "sample",
//         "schemaID": "",
//         "selectedInputParams": {},
//         "selectedPathParams": {},
//         "selectedBody": {},
//         "outPutResponse": "4",
//         "outputParamsTag": {},
//         "indexes": {
//             "employeeId":"secondary"
//         }
//     },
//           {
//               "id": "Forecasted Cost Data",
//               "name": "Forecasted Cost Data",
//               "children": [],
//               "selectedOutputParams": [
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "api_version": "2021-10-01"
//               },
//               "outputParams": [
//                   "properties",
//                   "id",
//                   "name",
//                   "type",
//                   "location",
//                   "eTag"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {},
//               "Integration_Name": "Azure Cost Analysis",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {},
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "VirtualMachineData",
//               "name": "VirtualMachineData",
//               "children": [],
//               "selectedOutputParams": [
//                   "cost"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "timespan": "string",
//                   "interval": "string",
//                   "metricnames": "string",
//                   "aggregation": "string",
//                   "api_version": "string"
//               },
//               "outputParams": [
//                   "cost",
//                   "timespan",
//                   "interval",
//                   "value",
//                   "namespace",
//                   "resourceregion"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {},
//               "Integration_Name": "VirtualMachine",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "SystemLogs",
//               "name": "SystemLogs",
//               "children": [],
//               "selectedOutputParams": [
//                   "actor"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "since": "2024-03-10",
//                   "q": "Saikiran%20Gadupathi"
//               },
//               "outputParams": [
//                   "actor",
//                   "client",
//                   "device",
//                   "authenticationContext",
//                   "displayMessage",
//                   "eventType",
//                   "outcome",
//                   "published",
//                   "securityContext",
//                   "severity",
//                   "debugContext",
//                   "legacyEventType",
//                   "transaction",
//                   "uuid",
//                   "version",
//                   "request",
//                   "target"
//               ],
//               "PathParams": {
//                   "domain": "dev-69282603-admin.okta.com"
//               },
//               "body": {},
//               "Integration_Name": "SystemLogs",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "domain": "dev-69282603-admin.okta.com"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//             "id": "SystemLogs",
//             "name": "SystemLogs",
//             "children": [],
//             "selectedOutputParams": [
//                 "actor"
//             ],
//             "selectedWorkflows": [
//                 "purge workflow"
//             ],
//             "description": "API description not found",
//             "selected": true,
//             "inputParams": {
//                 "since": "2024-03-10",
//                 "q": "Saikiran%20Gadupathi"
//             },
//             "outputParams": [
//                 "actor",
//                 "client",
//                 "device",
//                 "authenticationContext",
//                 "displayMessage",
//                 "eventType",
//                 "outcome",
//                 "published",
//                 "securityContext",
//                 "severity",
//                 "debugContext",
//                 "legacyEventType",
//                 "transaction",
//                 "uuid",
//                 "version",
//                 "request",
//                 "target"
//             ],
//             "PathParams": {
//                 "domain": "dev-69282603-admin.okta.com"
//             },
//             "body": {},
//             "Integration_Name": "Okta_Pipeline",
//             "schemaID": "",
//             "selectedInputParams": {},
//             "selectedPathParams": {
//                 "domain": "dev-69282603-admin.okta.com"
//             },
//             "selectedBody": {},
//             "outPutResponse": ""
//         },
//           {
//               "id": "FilteredLogs",
//               "name": "FilteredLogs",
//               "children": [],
//               "selectedOutputParams": [],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "actor",
//                   "client",
//                   "device",
//                   "authenticationContext",
//                   "displayMessage",
//                   "eventType",
//                   "outcome",
//                   "published",
//                   "securityContext",
//                   "severity",
//                   "debugContext",
//                   "legacyEventType",
//                   "transaction",
//                   "uuid",
//                   "version",
//                   "request",
//                   "target"
//               ],
//               "PathParams": {
//                   "since": "2024-03-04",
//                   "q": "Saikiran%20Gadupathi"
//               },
//               "body": {},
//               "Integration_Name": "SystemLogs",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "since": "2024-03-04",
//                   "q": "Saikiran%20Gadupathi"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "Application_Users",
//               "name": "Application_Users",
//               "children": [],
//               "selectedOutputParams": [
//                   "0"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "0"
//               ],
//               "PathParams": {
//                   "app_id": "0oaf8annb5fGMKk9A5d7",
//                   "domain": "dev-69282603-admin.okta.com"
//               },
//               "body": {},
//               "Integration_Name": "ApplicationUsers",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "app_id": "0oaf8annb5fGMKk9A5d7"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "ApplicationOperations",
//               "name": "ApplicationOperations",
//               "children": [],
//               "selectedOutputParams": [
//                   "id",
//                   "status"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "q": "saikiran"
//               },
//               "outputParams": [
//                   "id",
//                   "name",
//                   "label",
//                   "status",
//                   "lastUpdated",
//                   "created",
//                   "accessibility",
//                   "visibility",
//                   "features",
//                   "signOnMode",
//                   "credentials",
//                   "settings",
//                   "_links"
//               ],
//               "PathParams": {
//                   "domain": "dev-69282603-admin.okta.com"
//               },
//               "body": {},
//               "Integration_Name": "ApplicationOperations",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "q": "saikiran"
//               },
//               "selectedPathParams": {
//                   "domain": "dev-69282603-admin.okta.com"
//               },
//               "selectedBody": {},
//               "outPutResponse": "65d2f9a61b707d34e93754cf",
//               "outputParamsTag": {
//                   "status": "Mobius_PI_cumulative_usage",
//                   "id": "Mobius_PI_id"
//               },
//               "indexes": {
//                   "id": "primary",
//                   "status": "primary"
//               }
//           },
//           {
//               "id": "Snowflake DATA SHARING USAGE",
//               "name": "Snowflake DATA SHARING USAGE",
//               "children": [],
//               "selectedOutputParams": [
//                   "requestId",
//                   "createdOn"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "resultSetMetaData",
//                   "data",
//                   "code",
//                   "statementStatusUrl",
//                   "requestId",
//                   "sqlState",
//                   "statementHandle",
//                   "message",
//                   "createdOn"
//               ],
//               "PathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "body": {
//                   "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
//                   "timeout": "1000",
//                   "database": "GAIAN1",
//                   "schema": "TABLE1",
//                   "warehouse": "FIRST_WAREHOUSE",
//                   "role": "ACCOUNTADMIN"
//               },
//               "Integration_Name": "Data Sharing Usage",
//               "schemaID": "",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "selectedBody": {
//                   "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
//                   "timeout": "1000",
//                   "database": "GAIAN1",
//                   "schema": "TABLE1",
//                   "warehouse": "FIRST_WAREHOUSE",
//                   "role": "ACCOUNTADMIN"
//               },
//               "outPutResponse": "",
//               "outputParamsTag": {
//                   "resultSetMetaData": "Mobius_PI_rolling_avg_usage",
//                   "data": "Mobius_PI_avg_cost_per_usage",
//                   "code": "Mobius_PI_api_call_volume",
//                   "requestId": "Mobius_PI_id",
//                   "createdOn": "Mobius_PI_time"
//               },
//               "indexes": {
//                   "resultSetMetaData": "none",
//                   "data": "primary",
//                   "code": "secondary",
//                   "requestId": "primary",
//                   "createdOn": "primary"
//               }
//           },
//           {
//               "id": "Snowflake_Account_Usage",
//               "name": "Snowflake_Account_Usage",
//               "children": [],
//               "selectedOutputParams": [
//                   "USAGE_DATE",
//                   "STORAGE_BYTES"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "USAGE_DATE",
//                   "STORAGE_BYTES",
//                   "STAGE_BYTES",
//                   "FAILSAFE_BYTES",
//                   "HYBRID_TABLE_STORAGE_BYTES"
//               ],
//               "PathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "body": {
//                   "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
//               },
//               "Integration_Name": "Account Usage",
//               "schemaID": "660660c81574a22f5d1a1a74",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "selectedBody": {
//                   "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
//               },
//               "outPutResponse": "66065b931574a22f5d1a1a0e",
//               "outputParamsTag": {
//                   "USAGE_DATE": "Mobius_PI_date",
//                   "STORAGE_BYTES": "Mobius_PI_total_usage"
//               },
//               "indexes": {
//                   "USAGE_DATE": "primary",
//                   "STORAGE_BYTES": "primary"
//               }
//           },
//           {
//               "id": "Snowflake_Organization_Usage",
//               "name": "Snowflake_Organization_Usage",
//               "children": [],
//               "selectedOutputParams": [
//                   "USAGE_DATE",
//                   "USAGE_TYPE"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "ORGANIZATION_NAME",
//                   "CONTRACT_NUMBER",
//                   "ACCOUNT_NAME",
//                   "ACCOUNT_LOCATOR",
//                   "REGION",
//                   "SERVICE_LEVEL",
//                   "USAGE_DATE",
//                   "USAGE_TYPE",
//                   "USAGE",
//                   "CURRENCY",
//                   "USAGE_IN_CURRENCY",
//                   "BALANCE_SOURCE",
//                   "BILLING_TYPE",
//                   "RATING_TYPE",
//                   "SERVICE_TYPE",
//                   "IS_ADJUSTMENT"
//               ],
//               "PathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "body": {
//                   "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//               },
//               "Integration_Name": "Organization Usage",
//               "schemaID": "660692611574a22f5d1a1bf4",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "domain": "axoiihb-of84409"
//               },
//               "selectedBody": {
//                   "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//               },
//               "outPutResponse": "65fd1b231574a22f5d1a0d5c",
//               "outputParamsTag": {
//                   "USAGE_DATE": "Mobius_PI_date",
//                   "USAGE_TYPE": "Mobius_PI_cost_changes"
//               },
//               "indexes": {
//                   "USAGE_DATE": "primary",
//                   "USAGE_TYPE": "primary"
//               }
//           },
//           {
//             "id": "Snowflake Organization Usage",
//             "name": "Snowflake Organization Usage",
//             "children": [],
//             "selectedOutputParams": [
//                 "USAGE_DATE",
//                 "USAGE_TYPE"
//             ],
//             "selectedWorkflows": [
//                 "purge workflow"
//             ],
//             "description": "API description not found",
//             "selected": true,
//             "inputParams": {},
//             "outputParams": [
//                 "ORGANIZATION_NAME",
//                 "CONTRACT_NUMBER",
//                 "ACCOUNT_NAME",
//                 "ACCOUNT_LOCATOR",
//                 "REGION",
//                 "SERVICE_LEVEL",
//                 "USAGE_DATE",
//                 "USAGE_TYPE",
//                 "USAGE",
//                 "CURRENCY",
//                 "USAGE_IN_CURRENCY",
//                 "BALANCE_SOURCE",
//                 "BILLING_TYPE",
//                 "RATING_TYPE",
//                 "SERVICE_TYPE",
//                 "IS_ADJUSTMENT"
//             ],
//             "PathParams": {
//                 "domain": "axoiihb-of84409"
//             },
//             "body": {
//                 "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//             },
//             "Integration_Name": "Snowflake_Pipeline",
//             "schemaID": "660692611574a22f5d1a1bf4",
//             "selectedInputParams": {},
//             "selectedPathParams": {
//                 "domain": "axoiihb-of84409"
//             },
//             "selectedBody": {
//                 "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//             },
//             "outPutResponse": "65fd1b231574a22f5d1a0d5c",
//             "outputParamsTag": {
//                 "USAGE_DATE": "Mobius_PI_date",
//                 "USAGE_TYPE": "Mobius_PI_cost_changes"
//             },
//             "indexes": {
//                 "USAGE_DATE": "primary",
//                 "USAGE_TYPE": "primary"
//             }
//         },
//           {
//               "id": "OpenAI_Activities",
//               "name": "OpenAI_Activities",
//               "children": [],
//               "selectedOutputParams": [
//                   "organization_id",
//                   "object",
//                   "data",
//                   "ft_data",
//                   "dalle_api_data",
//                   "whisper_api_data"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "end_date": "2024-03-14",
//                   "start_date": "2024-03-12"
//               },
//               "outputParams": [
//                   "object",
//                   "data",
//                   "ft_data",
//                   "dalle_api_data",
//                   "whisper_api_data",
//                   "tts_api_data",
//                   "assistant_code_interpreter_data"
//               ],
//               "PathParams": {},
//               "body": {},
//               "Integration_Name": "OpenAI Usage",
//               "schemaID": "65e9ab5228ebd37244da4a28",
//               "selectedInputParams": {
//                   "end_date": "2024-03-14",
//                   "start_date": "2024-03-12"
//               },
//               "selectedPathParams": {},
//               "selectedBody": {},
//               "outPutResponse": "",
//               "outputParamsTag": {
//                   "organization_id": "Mobius_PI_total_usage",
//                   "object": "Mobius_PI_rolling_avg_usage",
//                   "data": "Mobius_PI_id",
//                   "ft_data": "Mobius_PI_api_call_volume"
//               },
//               "indexes": {
//                   "organization_id": "secondary",
//                   "object": "secondary",
//                   "data": "secondary"
//               }
//           },
//           {
//               "id": "billing usage",
//               "name": "billing usage",
//               "children": [],
//               "selectedOutputParams": [],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "end_date": "2024-03-12",
//                   "start_date": "2024-01-01"
//               },
//               "outputParams": [
//                   "object",
//                   "daily_costs",
//                   "total_usage"
//               ],
//               "PathParams": {},
//               "body": {},
//               "Integration_Name": "OpenAI Usage",
//               "schemaID": "65e98f3728ebd37244da3fa3",
//               "selectedInputParams": {
//                   "end_date": "2024-03-12",
//                   "start_date": "2024-01-01"
//               },
//               "selectedPathParams": {},
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "StorageActivityLogs",
//               "name": "StorageActivityLogs",
//               "children": [],
//               "selectedOutputParams": [],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
//                   "api_version": "2015-04-01"
//               },
//               "outputParams": [
//                   "value"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {},
//               "Integration_Name": "StrorageAccount",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
//                   "api_version": "2015-04-01"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "StorageUsageDetails",
//               "name": "StorageUsageDetails",
//               "children": [],
//               "selectedOutputParams": [],
//               "selectedWorkflows": [
//                   "ingestion workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "api_version": "2017-11-30"
//               },
//               "outputParams": [
//                   "value"
//               ],
//               "PathParams": {
//                   "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
//               },
//               "body": {},
//               "Integration_Name": "StrorageAccount",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "api_version": "2017-11-30"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
//               },
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "StorageIngress",
//               "name": "StorageIngress",
//               "children": [],
//               "selectedOutputParams": [
//                   "cost",
//                   "timespan"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
//                   "interval": "PT5M",
//                   "metricnames": "Ingress",
//                   "aggregation": "total",
//                   "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                   "autoadjusttimegrain": true,
//                   "validatedimensions": false,
//                   "api_version": "2019-07-01"
//               },
//               "outputParams": [
//                   "cost",
//                   "timespan",
//                   "interval",
//                   "value",
//                   "namespace",
//                   "resourceregion"
//               ],
//               "PathParams": {
//                   "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
//               },
//               "body": {},
//               "Integration_Name": "StrorageAccount",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
//                   "interval": "PT5M",
//                   "metricnames": "Ingress",
//                   "aggregation": "total",
//                   "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                   "autoadjusttimegrain": true,
//                   "validatedimensions": false,
//                   "api_version": "2019-07-01"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
//               },
//               "selectedBody": {},
//               "outPutResponse": "",
//               "outputParamsTag": {
//                   "cost": "Mobius_PI_total_cost",
//                   "timespan": "Mobius_PI_time"
//               },
//               "indexes": {
//                   "cost": "primary",
//                   "timespan": "primary"
//               }
//           },
//           {
//               "id": "UsedCapacity",
//               "name": "UsedCapacity",
//               "children": [],
//               "selectedOutputParams": [
//                   "cost",
//                   "timespan"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "timespan": "2000-01-13%2F2024-04-01",
//                   "interval": "PT1H",
//                   "metricnames": "UsedCapacity",
//                   "aggregation": "average",
//                   "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                   "validatedimensions": "false",
//                   "api-version": "2019-07-01"
//               },
//               "outputParams": [
//                   "cost",
//                   "timespan",
//                   "interval",
//                   "value",
//                   "namespace",
//                   "resourceregion"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
//                   "resourceGroupName": "edo"
//               },
//               "body": {},
//               "Integration_Name": "StrorageAccount",
//               "schemaID": "660a986b1574a22f5d1a2074",
//               "selectedInputParams": {
//                   "timespan": "2000-01-13%2F2024-04-01",
//                   "interval": "PT1H",
//                   "metricnames": "UsedCapacity",
//                   "aggregation": "average",
//                   "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//                   "validatedimensions": "false",
//                   "api-version": "2019-07-01"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
//                   "resourceGroupName": "edo"
//               },
//               "selectedBody": {},
//               "outPutResponse": "660a96c61574a22f5d1a205f",
//               "outputParamsTag": {},
//               "indexes": {
//                   "cost": "primary",
//                   "timespan": "primary"
//               }
//           },
//           {
//               "id": "GetTablesList",
//               "name": "GetTablesList",
//               "children": [],
//               "selectedOutputParams": [
//                   "kind",
//                   "totalItems"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "kind",
//                   "etag",
//                   "tables",
//                   "totalItems"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111",
//                   "datasetId": "dataset1"
//               },
//               "body": {},
//               "Integration_Name": "BigQueryData",
//               "schemaID": "65d7101c1b707d34e937573c",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111",
//                   "datasetId": "dataset1"
//               },
//               "selectedBody": {},
//               "outPutResponse": "65cb674c1b707d34e9375023",
//               "outputParamsTag": {},
//               "indexes": {
//                   "kind": "primary",
//                   "totalItems": "primary"
//               }
//           },
//           {
//               "id": "GetDataSetDetails",
//               "name": "GetDataSetDetails",
//               "children": [],
//               "selectedOutputParams": [
//                   "id",
//                   "creationTime"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "kind",
//                   "etag",
//                   "id",
//                   "selfLink",
//                   "datasetReference",
//                   "defaultTableExpirationMs",
//                   "access",
//                   "creationTime",
//                   "lastModifiedTime",
//                   "location",
//                   "defaultPartitionExpirationMs",
//                   "type",
//                   "isCaseInsensitive",
//                   "maxTimeTravelHours",
//                   "storageBillingModel"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111",
//                   "datasetId": "dataset1"
//               },
//               "body": {},
//               "Integration_Name": "BigQueryData",
//               "schemaID": "6603e7471574a22f5d1a11ee",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111",
//                   "datasetId": "dataset1"
//               },
//               "selectedBody": {},
//               "outPutResponse": "65cc59061b707d34e9375158",
//               "outputParamsTag": {
//                   "id": "Mobius_PI_id",
//                   "creationTime": "Mobius_PI_total_cost"
//               },
//               "indexes": {
//                   "id": "primary",
//                   "creationTime": "primary"
//               }
//           },
//           {
//             "id": "GetDataSetDetails",
//             "name": "GetDataSetDetails",
//             "children": [],
//             "selectedOutputParams": [
//                 "id",
//                 "creationTime"
//             ],
//             "selectedWorkflows": [
//                 "purge workflow"
//             ],
//             "description": "API description not found",
//             "selected": true,
//             "inputParams": {},
//             "outputParams": [
//                 "kind",
//                 "etag",
//                 "id",
//                 "selfLink",
//                 "datasetReference",
//                 "defaultTableExpirationMs",
//                 "access",
//                 "creationTime",
//                 "lastModifiedTime",
//                 "location",
//                 "defaultPartitionExpirationMs",
//                 "type",
//                 "isCaseInsensitive",
//                 "maxTimeTravelHours",
//                 "storageBillingModel"
//             ],
//             "PathParams": {
//                 "projectId": "magnetic-nimbus-414111",
//                 "datasetId": "dataset1"
//             },
//             "body": {},
//             "Integration_Name": "BigQuery_Pipeline",
//             "schemaID": "6603e7471574a22f5d1a11ee",
//             "selectedInputParams": {},
//             "selectedPathParams": {
//                 "projectId": "magnetic-nimbus-414111",
//                 "datasetId": "dataset1"
//             },
//             "selectedBody": {},
//             "outPutResponse": "65cc59061b707d34e9375158",
//             "outputParamsTag": {
//                 "id": "Mobius_PI_id",
//                 "creationTime": "Mobius_PI_total_cost"
//             },
//             "indexes": {
//                 "id": "primary",
//                 "creationTime": "primary"
//             }
//         },
//           {
//               "id": "CostbyResourceGroupName",
//               "name": "CostbyResourceGroupName",
//               "children": [],
//               "selectedOutputParams": [],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "api_version": "2021-10-01"
//               },
//               "outputParams": [
//                   "Cost",
//                   "CostUSD",
//                   "UsageDate",
//                   "ResourceGroupName",
//                   "Currency",
//                   "timestamp"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           },
//                           "totalCostUSD": {
//                               "name": "CostUSD",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "grouping": [
//                           {
//                               "type": "Dimension",
//                               "name": "ResourceGroupName"
//                           }
//                       ]
//                   },
//                   "timeframe": "Custom",
//                   "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
//               },
//               "Integration_Name": "AzureCostAnalysis",
//               "schemaID": "6606c6711574a22f5d1a1dc2",
//               "selectedInputParams": {
//                   "api_version": "2021-10-01"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "selectedBody": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           },
//                           "totalCostUSD": {
//                               "name": "CostUSD",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "grouping": [
//                           {
//                               "type": "Dimension",
//                               "name": "ResourceGroupName"
//                           }
//                       ]
//                   },
//                   "timeframe": "Custom",
//                   "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
//               },
//               "outPutResponse": "6606c52b1574a22f5d1a1da5",
//               "outputParamsTag": {
//                   "CostUSD": "Mobius_PI_total_cost"
//               },
//               "indexes": {
//                   "UsageDate": "primary",
//                   "timestamp": "primary"
//               }
//           },
//           {
//               "id": "ForecastedCostData",
//               "name": "ForecastedCostData",
//               "children": [],
//               "selectedOutputParams": [
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "api_version": "2021-10-01",
//                   "_24top": "5000"
//               },
//               "outputParams": [
//                   "Cost",
//                   "UsageDate",
//                   "CostStatus",
//                   "Currency",
//                   "timestamp"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "filter": {
//                           "Dimensions": {
//                               "Name": "PublisherType",
//                               "Operator": "In",
//                               "Values": [
//                                   "azure"
//                               ]
//                           }
//                       }
//                   },
//                   "includeActualCost": true,
//                   "includeFreshPartialCost": false,
//                   "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
//               },
//               "Integration_Name": "AzureCostAnalysis",
//               "schemaID": "6606a7a71574a22f5d1a1ca2",
//               "selectedInputParams": {
//                   "api_version": "2021-10-01",
//                   "_24top": "5000"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "selectedBody": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "filter": {
//                           "Dimensions": {
//                               "Name": "PublisherType",
//                               "Operator": "In",
//                               "Values": [
//                                   "azure"
//                               ]
//                           }
//                       }
//                   },
//                   "includeActualCost": true,
//                   "includeFreshPartialCost": false,
//                   "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
//               },
//               "outPutResponse": "660699a21574a22f5d1a1c87",
//               "outputParamsTag": {
//                   "UsageDate": "Mobius_PI_date",
//                   "timestamp": "Mobius_PI_time"
//               },
//               "indexes": {
//                   "UsageDate": "primary",
//                   "timestamp": "primary"
//               }
//           },
//           {
//               "id": "CostbyServiceName",
//               "name": "CostbyServiceName",
//               "children": [],
//               "selectedOutputParams": [
//                   "UsageDate",
//                   "timestamp"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "api_version": "2021-10-01",
//                   "top": "5000"
//               },
//               "outputParams": [
//                   "Cost",
//                   "CostUSD",
//                   "UsageDate",
//                   "ServiceName",
//                   "Currency",
//                   "timestamp"
//               ],
//               "PathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "body": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           },
//                           "totalCostUSD": {
//                               "name": "CostUSD",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "grouping": [
//                           {
//                               "type": "Dimension",
//                               "name": "ServiceName"
//                           }
//                       ]
//                   },
//                   "timeframe": "Custom",
//                   "timePeriod": {
//                       "from": "2024-02-13T00:00:00+00:00",
//                       "to": "2024-02-14T23:59:59+00:00"
//                   }
//               },
//               "Integration_Name": "AzureCostAnalysis",
//               "schemaID": "660a625b1574a22f5d1a1f20",
//               "selectedInputParams": {
//                   "api_version": "2021-10-01",
//                   "top": "5000"
//               },
//               "selectedPathParams": {
//                   "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//               },
//               "selectedBody": {
//                   "type": "ActualCost",
//                   "dataSet": {
//                       "granularity": "Daily",
//                       "aggregation": {
//                           "totalCost": {
//                               "name": "Cost",
//                               "function": "Sum"
//                           },
//                           "totalCostUSD": {
//                               "name": "CostUSD",
//                               "function": "Sum"
//                           }
//                       },
//                       "sorting": [
//                           {
//                               "direction": "ascending",
//                               "name": "UsageDate"
//                           }
//                       ],
//                       "grouping": [
//                           {
//                               "type": "Dimension",
//                               "name": "ServiceName"
//                           }
//                       ]
//                   },
//                   "timeframe": "Custom",
//                   "timePeriod": {
//                       "from": "2024-02-13T00:00:00+00:00",
//                       "to": "2024-02-14T23:59:59+00:00"
//                   }
//               },
//               "outPutResponse": "660a5f4c1574a22f5d1a1f1d",
//               "outputParamsTag": {
//                   "UsageDate": "Mobius_PI_date",
//                   "timestamp": "Mobius_PI_time"
//               },
//               "indexes": {
//                   "UsageDate": "primary",
//                   "timestamp": "primary"
//               }
//           },
//           {
//               "id": "GetBucketDetails",
//               "name": "GetBucketDetails",
//               "children": [],
//               "selectedOutputParams": [
//                   "kind"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow",
//                   "ingestion workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "projection": "full",
//                   "bucketName": "gaianbucket"
//               },
//               "outputParams": [
//                   "kind",
//                   "items"
//               ],
//               "PathParams": {},
//               "body": {},
//               "Integration_Name": "CloudStorage",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "projection": "full",
//                   "bucketName": "gaianbucket"
//               },
//               "selectedPathParams": {},
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "Project Storage",
//               "name": "Project Storage",
//               "children": [],
//               "selectedOutputParams": [
//                   "timestamp",
//                   "total_logical_bytes",
//                   "project_id"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "project_id",
//                   "total_logical_bytes",
//                   "timestamp"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "body": {
//                   "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
//                   "useLegacySql": "false"
//               },
//               "Integration_Name": "CloudStorage",
//               "schemaID": "660515fe1574a22f5d1a145b",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "selectedBody": {
//                   "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
//                   "useLegacySql": "false"
//               },
//               "outPutResponse": "65fbf7b71574a22f5d1a0a82",
//               "outputParamsTag": {
//                   "project_id": "Mobius_PI_api_call_volume",
//                   "total_logical_bytes": "Mobius_PI_storage_growth"
//               },
//               "indexes": {
//                   "timestamp": "primary",
//                   "total_logical_bytes": "primary"
//               }
//           },
//           {
//               "id": "GetBucketList",
//               "name": "GetBucketList",
//               "children": [],
//               "selectedOutputParams": [
//                   "kind",
//                   "items"
//               ],
//               "selectedWorkflows": [
//                   "ingestion workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {
//                   "project": "magnetic-nimbus-414111",
//                   "bucketName": "gaianbucket"
//               },
//               "outputParams": [
//                   "kind",
//                   "items"
//               ],
//               "PathParams": {},
//               "body": {},
//               "Integration_Name": "CloudStorage",
//               "schemaID": "",
//               "selectedInputParams": {
//                   "project": "magnetic-nimbus-414111",
//                   "bucketName": "gaianbucket"
//               },
//               "selectedPathParams": {},
//               "selectedBody": {},
//               "outPutResponse": ""
//           },
//           {
//               "id": "Tables Storage",
//               "name": "Tables Storage",
//               "children": [],
//               "selectedOutputParams": [
//                   "table_name",
//                   "project_id"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "project_id",
//                   "project_number",
//                   "table_catalog",
//                   "table_schema",
//                   "table_name",
//                   "creation_time",
//                   "total_rows",
//                   "total_partitions",
//                   "total_logical_bytes",
//                   "active_logical_bytes",
//                   "long_term_logical_bytes",
//                   "current_physical_bytes",
//                   "total_physical_bytes",
//                   "active_physical_bytes",
//                   "long_term_physical_bytes",
//                   "time_travel_physical_bytes",
//                   "storage_last_modified_time",
//                   "deleted",
//                   "table_type",
//                   "fail_safe_physical_bytes",
//                   "last_metadata_refresh_time"
//               ],
//               "PathParams": {
//                   "projectId": ""
//               },
//               "body": {
//                   "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
//                   "useLegacySql": false
//               },
//               "Integration_Name": "CloudStorage",
//               "schemaID": "6602c6c61574a22f5d1a1007",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": ""
//               },
//               "selectedBody": {
//                   "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
//                   "useLegacySql": false
//               },
//               "outPutResponse": "65fc02571574a22f5d1a0aac",
//               "outputParamsTag": {},
//               "indexes": {
//                   "table_name": "primary",
//                   "project_id": "primary"
//               }
//           },
//           {
//               "id": "TableStorageUsageTimeLine",
//               "name": "TableStorageUsageTimeLine",
//               "children": [],
//               "selectedOutputParams": [
//                   "project_id",
//                   "table_name"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "usage_date",
//                   "project_id",
//                   "table_catalog",
//                   "project_number",
//                   "table_schema",
//                   "table_name",
//                   "billable_total_logical_usage",
//                   "billable_active_logical_usage",
//                   "billable_long_term_logical_usage",
//                   "billable_total_physical_usage",
//                   "billable_active_physical_usage",
//                   "billable_long_term_physical_usage"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "body": {
//                   "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
//                   "useLegacySql": "false"
//               },
//               "Integration_Name": "CloudStorage",
//               "schemaID": "6602c73b1574a22f5d1a1010",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "selectedBody": {
//                   "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
//                   "useLegacySql": "false"
//               },
//               "outPutResponse": "65fd15e11574a22f5d1a0d36",
//               "outputParamsTag": {
//                   "project_id": "Mobius_PI_id",
//                   "table_name": "Mobius_PI_user_id"
//               },
//               "indexes": {
//                   "project_id": "primary",
//                   "table_name": "primary"
//               }
//           },
         
//           {
//               "id": "DailyProjectCost",
//               "name": "DailyProjectCost",
//               "children": [],
//               "selectedOutputParams": [
//              "name"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "kind",
//                   "name",
//                   "schema",
//                   "jobReference",
//                   "totalRows",
//                   "rows",
//                   "totalBytesProcessed",
//                   "jobComplete",
//                   "cacheHit",
//                   "queryId",
//                   "jobCreationReason"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "body": {
//                   "query": "WITH historical_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR)), YEAR) = DATE('2024-01-01') GROUP BY project_name, service_description, project_labels, invoice_date), forecast_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, AVG(cost) AS avg_cost FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR) BETWEEN TIMESTAMP('2024-01-01') AND TIMESTAMP('2024-04-01') GROUP BY project_name, service_description, project_labels, invoice_date) SELECT h.project_name, h.service_description, h.project_labels, h.invoice_date, SUM(h.total_cost) AS total_cost, h.total_credits, f.avg_cost AS forecasted_cost FROM historical_data h LEFT JOIN forecast_data f ON h.project_name = f.project_name AND h.service_description = f.service_description AND h.project_labels = f.project_labels AND h.invoice_date = f.invoice_date GROUP BY h.project_name, h.service_description, h.project_labels, h.invoice_date, h.total_credits, f.avg_cost ORDER BY h.project_name, h.invoice_date",
//                   "useLegacySql": "false"
//               },
//               "Integration_Name": "Cost Analysis",
//               "schemaID": "660befc168ba6066b351fac5",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "selectedBody": {
//                   "query": "WITH historical_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR)), YEAR) = DATE('2024-01-01') GROUP BY project_name, service_description, project_labels, invoice_date), forecast_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, AVG(cost) AS avg_cost FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR) BETWEEN TIMESTAMP('2024-01-01') AND TIMESTAMP('2024-04-01') GROUP BY project_name, service_description, project_labels, invoice_date) SELECT h.project_name, h.service_description, h.project_labels, h.invoice_date, SUM(h.total_cost) AS total_cost, h.total_credits, f.avg_cost AS forecasted_cost FROM historical_data h LEFT JOIN forecast_data f ON h.project_name = f.project_name AND h.service_description = f.service_description AND h.project_labels = f.project_labels AND h.invoice_date = f.invoice_date GROUP BY h.project_name, h.service_description, h.project_labels, h.invoice_date, h.total_credits, f.avg_cost ORDER BY h.project_name, h.invoice_date",
//                   "useLegacySql": "false"
//               },
//               "outPutResponse": "65f3f0415f353406a916e714",
//               "indexes": {
//                   "totalBytesProcessed": "primary",
//                   "queryId": "primary"
//               },
//               "outputParamsTag": {
//                   "totalBytesProcessed": "Mobius_PI_total_usage",
//                   "queryId": "Mobius_PI_id"
//               }
//           },
//           {
//               "id": "BillingReport",
//               "name": "BillingReport",
//               "children": [],
//               "selectedOutputParams": [
//                   "timestamp",
//                   "invoice_date",
//                   "total_credits",
//                   "name"
                  
//               ],
//               "selectedWorkflows": [
//                   "ingestion workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                 "name",
//                   "project_name",
//                   "service_description",
//                   "project_labels",
//                   "invoice_date",
//                   "total_cost",
//                   "total_credits",
//                   "forecasted_cost",
//                   "timestamp"
//               ],
//               "PathParams": {
//                   "projectId": ""
//               },
//               "body": {
//                   "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
//                   "useLegacySql": false
//               },
//               "Integration_Name": "Cost Analysis",
//               "schemaID": "660aae5d1574a22f5d1a2141",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": ""
//               },
//               "selectedBody": {
//                   "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
//                   "useLegacySql": false
//               },
//               "outPutResponse": "660aac7e1574a22f5d1a2135",
//               "outputParamsTag": {
//                   "timestamp": "Mobius_PI_time",
//                   "invoice_date": "Mobius_PI_date"
//               },
//               "indexes": {
//                   "timestamp": "primary",
//                   "invoice_date": "primary",
//                   "name":"secondary"
                  
//               }
//           },
//           {
//               "id": "GetCostUsage",
//               "name": "GetCostUsage",
//               "children": [],
//               "selectedOutputParams": [
//                   "total_cost",
//                   "description",
//                   "total_credits",
//                   "name"
//               ],
//               "selectedWorkflows": [
//                   "purge workflow"
//               ],
//               "description": "API description not found",
//               "selected": true,
//               "inputParams": {},
//               "outputParams": [
//                   "name",
//                   "description",
//                   "project_labels",
//                   "total_cost",
//                   "total_credits"
//               ],
//               "PathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "body": {
//                   "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
//                   "useLegacySql": "false"
//               },
//               "Integration_Name": "Cost Analysis",
//               "schemaID": "660a99331574a22f5d1a2075",
//               "selectedInputParams": {},
//               "selectedPathParams": {
//                   "projectId": "magnetic-nimbus-414111"
//               },
//               "selectedBody": {
//                   "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
//                   "useLegacySql": "false"
//               },
//               "outPutResponse": "65e5bc9228ebd37244d9b2c1",
//               "outputParamsTag": {},
//               "indexes": {
//                   "total_cost": "primary",
//                   "description": "primary",
//                   "name":"secondary"
//               }
//           }
//       ],
//       "id": "TestUser1"
//   }
// ],
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65ccb2ea1b707d34e93751ef/instances/list").reply(200, {
//   entities: [
//     {
//         "integrationName": "CloudStorage",
//         "Api_Name": "GetBucketDetails",
//         "inputParameters": {
//             "projection": "full",
//             "bucketName": null
//         },
//         "PlatformName": "BigQuery",
//         "no": 0,
//         "outputParameters": 
//             {
//                 "items": [
//                     {
//                         "bucket": "gaianbucket",
//                         "contentType": "application/pdf",
//                         "crc32c": "VO8cKg==",
//                         "etag": "CNi1ou7Xp4QDEAE=",
//                         "generation": "1707805661240024",
//                         "id": "gaianbucket/Articulate_English_December-2023-Online.pdf/1707805661240024",
//                         "kind": "storage#object",
//                         "md5Hash": "itdhN1ReV2SpzI9APgO9eA==",
//                         "mediaLink": "https://storage.googleapis.com/download/storage/v1/b/gaianbucket/o/Articulate_English_December-2023-Online.pdf?generation=1707805661240024&alt=media",
//                         "metageneration": "1",
//                         "name": "Articulate_English_December-2023-Online.pdf",
//                         "selfLink": "https://www.googleapis.com/storage/v1/b/gaianbucket/o/Articulate_English_December-2023-Online.pdf",
//                         "size": "16619830",
//                         "storageClass": "STANDARD",
//                         "timeCreated": "2024-02-13T06:27:41.282Z",
//                         "timeStorageClassUpdated": "2024-02-13T06:27:41.282Z",
//                         "updated": "2024-02-13T06:27:41.282Z"
//                     }
//                 ],
//                 "kind": "storage#objects"
//             }
//         ,
//         "url": "https://storage.googleapis.com/storage/v1/b",
//         "PathParameters": {
//             "bucketName": "gaianbucket"
//         }
//     }
// ]
// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fbf7b71574a22f5d1a0a82/instances/list").reply(200, {
//   entities: [
//     {
//         "integrationName": "CloudStorage",
//         "Api_Name": "Project Storage",
//         "PathParameters": {
//             "projectId": ""
//         },
//         "body": {
//             "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
//             "useLegacySql": 0
//         },
//         "no": 1203,
//         "outputParameters": {
//             "total_logical_bytes": 11003296,
//             "project_id": "magnetic-nimbus-414111",
//             "timestamp": 20
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries"
//     }
// ]


// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65532198a5cb97115f849240/instances/list").reply(200, {
//   entities: [
//     {
//         "analyticsStyleName": "Costs Appropriation",
//         "analyticsStyleDescription": "Analyzing costs associated with BigQuery usage.",
//         "createdBy": "saleem",
//         "collectionOfAQs": [
//             "6560793540eb1835fe4d05de",
//             "65607e8e40eb1835fe4d05ee",
//             "656069f659570d3e1663ddd4"
//         ],
//         "createdOn": "2024-03-15T05:39:53.005Z",
//         "id": "2024-03-15T05:39:53.005Z"
//     },
//     {
//         "analyticsStyleName": "API Utilization",
//         "analyticsStyleDescription": "Tracking API calls made to BigQuery",
//         "createdBy": "sravan",
//         "collectionOfAQs": [
//             "655eddbc7c8ba57caa378308"
//         ],
//         "createdOn": "2024-03-14T05:39:10.038Z",
//         "id": "2024-03-14T05:39:10.039Z"
//     },
//     {
//         "analyticsStyleName": "Storage Consumption",
//         "analyticsStyleDescription": " BigQuery storage usage analysis",
//         "createdBy": "sowmya",
//         "collectionOfAQs": [
//             "65658aec367e4160070e86f9",
//             "65604b6059570d3e1663dd8f"
          
//         ],
//         "createdOn": "2024-03-14T05:38:07.593Z",
//         "id": "2024-03-14T05:38:07.593Z"
//     },
//     {
//         "analyticsStyleName": "Product Categorization",
//         "analyticsStyleDescription": "Categorizing BigQuery products and services usage.",
//         "createdBy": "saleem",
//         "collectionOfAQs": [
//             "655eddbc7c8ba57caa378308"
//         ],
//         "createdOn": "2023-11-19T13:36:31.598Z",
//         "id": "2023-11-19T13:36:31.598Z"
//     },
//     {
//       "analyticsStyleName": "Budgetary Distribution",
//       "analyticsStyleDescription": "Planning budgets for Azure usage.",
//       "createdBy": "saleem",
//       "collectionOfAQs": [
//           "655eddbc7c8ba57caa378308"
//       ],
//       "createdOn": "2023-10-19T13:36:31.598Z",
//       "id": "2023-10-19T13:36:31.598Z"
//   }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9ed468ba6066b351fa84/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
//             "projectId": "magnetic-nimbus-414111"
//         },
//         "body": {
//             "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = `202402` AND usage_start_time BETWEEN TIMESTAMP(`1999-02-05`) AND TIMESTAMP(`2024-02-27`)",
//             "useLegacySql": 0
//         },
//         "outputParameters": {
//             "name": "My First Project",
//             "description": "Cloud Logging",
//             "daily_credits": 0,
//             "invoice_date": "2024-02-12",
//             "timestamp": 1711973500000,
//             "daily_cost_inr": 0,
//             "total_credits":60
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "Cost Analysis",
//         "Api_Name": "BillingReport",
//         "no": 1203
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9f9e68ba6066b351fa85/instances/list").reply(200, {
//   entities:  [
//     {
//         "integrationName": "Cost Analysis",
//         "Api_Name": "GetCostUsage",
//         "PathParameters": {
//             "projectId": "magnetic-nimbus-414111"
//         },
//         "body": {
//             "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = `202401` GROUP BY 1, 2, 3 ORDER BY 1",
//             "useLegacySql": 0
//         },
//         "outputParameters": {
//             "project_labels": [],
//             "name": "saleem",
//             "description": "Invoice",
//             "total_cost": 0,
//             "total_credits": 0
//         },
//         "no": 1203,
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries"
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660ba09468ba6066b351fa86/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
//             "projectId": "magnetic-nimbus-414111"
//         },
//         "body": {
//             "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(`2024-03-15`) LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(`2024-01-01`) AND TIMESTAMP(`2024-03-15`) ORDER BY invoice_date, project.name, service.description",
//             "useLegacySql": 0
//         },
//         "outputParameters": {
//             "name": "My First Project",
//             "description": "Cloud Logging",
//             "daily_credits": 0,
//             "invoice_date": "2024-02-12",
//             "timestamp": 1711980400000,
//             "daily_cost_inr": 0
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "Cost Analysis",
//         "Api_Name": "DailyProjectCost",
//         "no": 1203
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f7ec7f5d1ff73e68ddad50/instances/list").reply(200, {
//   entities: [
//     {
//         "Api_Name": "GetTablesList",
//         "PathParameters": {
//             "projectId": "my-new-project-4-412310",
//             "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
//         },
//         "no": 96,
//         "outputParameters": {
//             "etag": "WV9Ty1RBi/N51Mr0mD5k/A==",
//             "kind": "bigquery#tableList",
//             "tables": [
//                 {
//                     "creationTime": "1706693716036",
//                     "expirationTime": "1711877716036",
//                     "id": "my-new-project-4-412310:dataset4.table1",
//                     "kind": "bigquery#table",
//                     "tableReference": {
//                         "datasetId": "dataset4",
//                         "projectId": "my-new-project-4-412310",
//                         "tableId": "table1"
//                     },
//                     "type": "TABLE"
//                 }
//             ]
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/{{YOUR_PROJECT_ID}}/datasets/{{YOUR_DATASET_ID}}/tables"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f81d64b9ae611185f27eeb/instances/list").reply(200, {
//   entities: [
//     {
//         "integrationName": "CloudStorage",
//         "Api_Name": "GetBucketList",
//         "PlatformName": "BigQuery",
//         "no": 1,
//         "inputParameters": {
//             "project": "magnetic-nimbus-414111",
//             "bucketName": "gaianbucket"
//         },
//         "outputParameters": 
//             {
//                 "items": [
//                     {
//                         "etag": "CAE=",
//                         "iamConfiguration.bucketPolicyOnly.enabled": true,
//                         "iamConfiguration.bucketPolicyOnly.lockedTime": "2024-05-12T12:22:19.882Z",
//                         "iamConfiguration.publicAccessPrevention": "enforced",
//                         "iamConfiguration.uniformBucketLevelAccess.enabled": true,
//                         "iamConfiguration.uniformBucketLevelAccess.lockedTime": "2024-05-12T12:22:19.882Z",
//                         "id": "gaianbucket",
//                         "kind": "storage#bucket",
//                         "location": "US",
//                         "locationType": "multi-region",
//                         "metageneration": "1",
//                         "name": "gaianbucket",
//                         "projectNumber": "765420653814",
//                         "rpo": "DEFAULT",
//                         "selfLink": "https://www.googleapis.com/storage/v1/b/gaianbucket",
//                         "storageClass": "STANDARD",
//                         "timeCreated": "2024-02-12T12:22:19.882Z",
//                         "updated": "2024-02-12T12:22:19.882Z"
//                     }
//                 ],
//                 "kind": "storage#buckets"
//             },
//         "url": "https://storage.googleapis.com/storage/v1/b"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660abb1605c9541234bceb02/instances/list").reply(200, {
//   entities: [{
//         "PathParameters": {
//             "projectId": "magnetic-nimbus-414111"
//         },
//         "outputParameters": {
//             "active_physical_bytes": 29495544,
//             "table_name": "cloud_pricing_export",
//             "storage_last_modified_time": 1710839060.384,
//             "long_term_physical_bytes": 0,
//             "total_physical_bytes": 29495544,
//             "project_number": 765420653814,
//             "table_type": "BASE TABLE",
//             "total_rows": 1207790,
//             "fail_safe_physical_bytes": 0,
//             "time_travel_physical_bytes": 0,
//             "table_schema": "dataset1",
//             "total_partitions": 22,
//             "active_logical_bytes": 483596114,
//             "table_catalog": "magnetic-nimbus-414111",
//             "creation_time": 1709033107.857,
//             "last_metadata_refresh_time": 1710839075.61,
//             "project_id": "magnetic-nimbus-414111",
//             "long_term_logical_bytes": 0,
//             "current_physical_bytes": 29495544,
//             "deleted": false,
//             "total_logical_bytes": 483596114
//         },
//         "Api_Name": "Tables Storage",
//         "body": {
//             "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
//             "useLegacySql": 0
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "CloudStorage",
//         "no": 1203
//     }
// ]

// });


// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9d5068ba6066b351fa83/instances/list").reply(200, {
//   entities: [
//     {
//         "outputParameters": {
//             "table_schema": "dataset1",
//             "usage_date": "2024-02-24",
//             "billable_long_term_logical_usage": 0,
//             "table_name": "gcp_billing_export_resource_v1_012815_891010_F6E9D8",
//             "billable_total_logical_usage": 49468,
//             "table_catalog": "magnetic-nimbus-414111",
//             "billable_active_logical_usage": 49468,
//             "project_id": "magnetic-nimbus-414111",
//             "billable_active_physical_usage": 0,
//             "project_number": 765420653814,
//             "billable_total_physical_usage": 0,
//             "billable_long_term_physical_usage": 0
//         },
//         "PathParameters": {
//             "projectId": "magnetic-nimbus-414111"
//         },
//         "body": {
//             "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
//             "useLegacySql": 0
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "CloudStorage",
//         "Api_Name": "TableStorageUsageTimeLine",
//         "no": 1203
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f8101dec18e4223f021f26/instances/list").reply(200, {
//   entities: [ {
//     "Api_Name": "GetDataSetDetails",
//     "PathParameters": {
//         "projectId": "my-new-project-4-412310",
//         "datasetId": "dataset4"
//     },
//     "no": 129,
//     "outputParameters": 
//         {
//             "access": [
//                 {
//                     "role": "WRITER",
//                     "specialGroup": "projectWriters"
//                 },
//                 {
//                     "role": "OWNER",
//                     "specialGroup": "projectOwners"
//                 },
//                 {
//                     "role": "OWNER",
//                     "userByEmail": "aravind.kumar@gaiansolutions.com"
//                 },
//                 {
//                     "role": "READER",
//                     "specialGroup": "projectReaders"
//                 },
//                 {
//                     "role": "roles/bigquery.metadataViewer",
//                     "userByEmail": "saikiran.gadupathi@gaiansolutions.com"
//                 }
//             ],
//             "creationTime": "1706523893837",
//             "datasetReference.datasetId": "dataset4",
//             "datasetReference.projectId": "my-new-project-4-412310",
//             "defaultPartitionExpirationMs": "5184000000",
//             "defaultTableExpirationMs": "5184000000",
//             "etag": "Rcvs3NKRDgvflwxuWhXReQ==",
//             "id": "my-new-project-4-412310:dataset4",
//             "isCaseInsensitive": false,
//             "kind": "bigquery#dataset",
//             "lastModifiedTime": "1706866112804",
//             "location": "US",
//             "maxTimeTravelHours": "168",
//             "selfLink": "https://bigquery.googleapis.com/bigquery/v2/projects/my-new-project-4-412310/datasets/dataset4",
//             "storageBillingModel": "LOGICAL",
//             "type": "DEFAULT"
//         }
//     ,
//     "url": "https://bigquery.googleapis.com/bigquery/v2/projects/my-new-project-4-412310/datasets/dataset4"
// }]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660ab21605c9541234bceb00/instances/list").reply(200, {
//   entities: []

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660c1f1022f94a0e93b3de0f/instances/list").reply(200, {
//   entities: [ {
//     "inputParameters": {
//         "start_date": "2024-02-01",
//         "end_date": "2024-03-01"
//     },
//     "outputParameters": {
//         "n_generated_tokens_total": 76807,
//         "api_key_redacted": "sk-...ryV",
//         "n_context_tokens_total": 1340855,
//         "n_requests": 228,
//         "aggregation_timestamp": 1706745600,
//         "snapshot_id": "gpt-4-1106-preview",
//         "organization_name": "Gaian Solutions",
//         "api_key_name": "Mobius ChatBot",
//         "api_key_id": "key_eZSU7v27DnYN6zz7",
//         "organization_id": "org-IAoQZTAKQtDQTRpYmFHb9zk6",
//         "user_id": "apps@gaiansolutions.com",
//         "operation": "completion"
//     },
//     "PlatformName": "OPEN AI",
//     "url": "https://api.openai.com/v1/dashboard/activity",
//     "integrationName": "Usage",
//     "Api_Name": "OpenAI_Activities"
// }]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d2f9a61b707d34e93754cf/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://dev-69282603-admin.okta.com/api/v1/apps",
//         "Api_Name": "ApplicationOperations",
//         "PlatformName": "OKTA",
//         "integrationName": "ApplicationOperations",
//         "no": 20.36,
//         "PathParameters": {
//             "domain": "dev-69282603-admin.okta.com"
//         },
//         "inputParameters": {},
//         "body": {},
//         "outputParameters": {
//             "id": "0oaf89o8vnVWAyzlu5d7",
//             "name": "saasure",
//             "label": "Okta Admin Console",
//             "status": "ACTIVE",
//             "lastUpdated": "2024-02-19T03:45:14.000Z",
//             "created": "2024-02-19T03:45:13.000Z",
//             "accessibility": {
//                 "selfService": false,
//                 "errorRedirectUrl": null,
//                 "loginRedirectUrl": null
//             },
//             "visibility": {
//                 "autoSubmitToolbar": false,
//                 "hide": {
//                     "iOS": false,
//                     "web": false
//                 },
//                 "appLinks": {
//                     "admin": true
//                 }
//             },
//             "features": [],
//             "signOnMode": "OPENID_CONNECT",
//             "credentials": {
//                 "userNameTemplate": {
//                     "template": "${source.login}",
//                     "type": "BUILT_IN"
//                 },
//                 "signing": {
//                     "kid": "4ioSMVQ1PDaBJSepy_xbnC83SlUawRjpHSyye01WMYU"
//                 }
//             },
//             "settings": {
//                 "app": {},
//                 "notifications": {
//                     "vpn": {
//                         "network": {
//                             "connection": "DISABLED"
//                         },
//                         "message": null,
//                         "helpUrl": null
//                     }
//                 },
//                 "manualProvisioning": false,
//                 "implicitAssignment": false
//             },
//             "_links": {
//                 "uploadLogo": {
//                     "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/logo",
//                     "hints": {
//                         "allow": [
//                             "POST"
//                         ]
//                     }
//                 },
//                 "appLinks": [
//                     {
//                         "name": "admin",
//                         "href": "https://dev-69282603.okta.com/home/saasure/0oaf89o8vnVWAyzlu5d7/2",
//                         "type": "text/html"
//                     }
//                 ],
//                 "profileEnrollment": {
//                     "href": "https://dev-69282603.okta.com/api/v1/policies/rstf8ampppe6B98Ct5d7"
//                 },
//                 "policies": {
//                     "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/policies",
//                     "hints": {
//                         "allow": [
//                             "PUT"
//                         ]
//                     }
//                 },
//                 "groups": {
//                     "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/groups"
//                 },
//                 "logo": [
//                     {
//                         "name": "medium",
//                         "href": "https://ok12static.oktacdn.com/assets/img/logos/okta_admin_app.da3325676d57eaf566cb786dd0c7a819.png",
//                         "type": "image/png"
//                     }
//                 ],
//                 "accessPolicy": {
//                     "href": "https://dev-69282603.okta.com/api/v1/policies/rstf8ak7dnRy2qeA95d7"
//                 },
//                 "users": {
//                     "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/users"
//                 },
//                 "deactivate": {
//                     "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/lifecycle/deactivate"
//                 }
//             }
//         },
//         "id": "20.36"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d302ef1b707d34e9375517/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://dev-69282603-admin.okta.com/api/v1/apps/{{app_id}}/users",
//         "Api_Name": "Application_Users",
//         "PlatformName": "OKTA",
//         "integrationName": "Log Activities",
//         "no": 20.36,
//         "PathParameters": {
//             "app_id": "0oaf8annb5fGMKk9A5d7"
//         },
//         "inputParameters": {},
//         "body": {},
//         "outputParameters": 
//             {
//                 "id": "00uf89rtxeXdVF5DC5d7",
//                 "externalId": null,
//                 "created": "2024-02-19T05:39:01.000Z",
//                 "lastUpdated": "2024-02-19T05:39:01.000Z",
//                 "scope": "USER",
//                 "status": "ACTIVE",
//                 "statusChanged": "2024-02-19T05:39:01.000Z",
//                 "passwordChanged": null,
//                 "syncState": "DISABLED",
//                 "credentials": {
//                     "userName": "saikirangaduparthi999@gmail.com"
//                 },
//                 "profile": {},
//                 "_links": {
//                     "app": {
//                         "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf8annb5fGMKk9A5d7"
//                     },
//                     "user": {
//                         "href": "https://dev-69282603.okta.com/api/v1/users/00uf89rtxeXdVF5DC5d7"
//                     }
//                 }
//             }
//         ,
//         "id": "20.36"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d2f6c11b707d34e93754c1/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://dev-69282603-admin.okta.com/api/v1/logs",
//         "Api_Name": "SystemLogs",
//         "PlatformName": "OKTA",
//         "integrationName": "LogActivities",
//         "no": 20.36,
//         "PathParameters": {
//             "domain": "dev-69282603-admin.okta.com"
//         },
//         "inputParameters": {
//             "since": "",
//             "q": ""
//         },
//         "body": {},
//         "outputParameters": {
//             "actor": {
//                 "id": "00u4exiwtOxp3yrE35d5",
//                 "type": "User",
//                 "alternateId": "web@okta.com",
//                 "displayName": "Developer Free",
//                 "detailEntry": null
//             },
//             "client": {
//                 "userAgent": {
//                     "rawUserAgent": "Java/11.0.21",
//                     "os": "Unknown",
//                     "browser": "UNKNOWN"
//                 },
//                 "zone": "OFF_NETWORK",
//                 "device": "Unknown",
//                 "id": "capfx6SYTRNSWSMAOWNS",
//                 "ipAddress": "34.202.149.224",
//                 "geographicalContext": {
//                     "city": "Ashburn",
//                     "state": "Virginia",
//                     "country": "United States",
//                     "postalCode": "20149",
//                     "geolocation": {
//                         "lat": 39.0469,
//                         "lon": -77.4903
//                     }
//                 }
//             },
//             "device": null,
//             "authenticationContext": {
//                 "authenticationProvider": null,
//                 "credentialProvider": null,
//                 "credentialType": null,
//                 "issuer": null,
//                 "interface": null,
//                 "authenticationStep": 0,
//                 "externalSessionId": "trsXKaTa22eS_yqwjHQB80hIA"
//             },
//             "displayMessage": "Update application",
//             "eventType": "application.lifecycle.update",
//             "outcome": {
//                 "result": "SUCCESS",
//                 "reason": null
//             },
//             "published": "2024-02-19T03:45:13.410Z",
//             "securityContext": {
//                 "asNumber": 14618,
//                 "asOrg": "amazon technologies inc.",
//                 "isp": "amazon.com  inc.",
//                 "domain": "amazonaws.com",
//                 "isProxy": false
//             },
//             "severity": "INFO",
//             "debugContext": {
//                 "debugData": {
//                     "requestId": "476e4b20c4007c72065912e23b75fbdc,476e4b2",
//                     "dtHash": "87dc6f728f249625ca06ca9409040a8a00bdc5d0d33a33b77d8f78da3aeb512c",
//                     "requestUri": "/api/internal/orgs",
//                     "url": "/api/internal/orgs?"
//                 }
//             },
//             "legacyEventType": "app.generic.config.app_updated",
//             "transaction": {
//                 "type": "WEB",
//                 "id": "476e4b20c4007c72065912e23b75fbdc,476e4b2",
//                 "detail": {
//                     "requestApiTokenId": "00T1oxy461N1e3s3h5d7"
//                 }
//             },
//             "uuid": "49a8fa82-ced9-11ee-9817-67b085579cf3",
//             "version": "0",
//             "request": {
//                 "ipChain": [
//                     {
//                         "ip": "34.202.149.224",
//                         "geographicalContext": {
//                             "city": "Ashburn",
//                             "state": "Virginia",
//                             "country": "United States",
//                             "postalCode": "20149",
//                             "geolocation": {
//                                 "lat": 39.0469,
//                                 "lon": -77.4903
//                             }
//                         },
//                         "version": "V4",
//                         "source": null
//                     }
//                 ]
//             },
//             "target": [
//                 {
//                     "id": "0oaf89o8vnVWAyzlu5d7",
//                     "type": "AppInstance",
//                     "alternateId": "Okta Admin Console",
//                     "displayName": "Okta Admin Console",
//                     "detailEntry": null
//                 }
//             ]
//         },
//         "id": "20.36"
//     }
// ]

// });


// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1a121574a22f5d1a0d4f/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
//         "Api_Name": "Snowflake_Account_Usage",
//         "integrationName": "Account Usage",
//         "no": 1203.9,
//         "PathParameters": {
//             "domain": ""
//         },
//         "inputParameters": {},
//         "body": {
//             "statement": [
//                 {
//                     "name": "ACCESS_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY"
//                 },
//                 {
//                     "name": "AGGREGATE_QUERY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATE_QUERY_HISTORY"
//                 },
//                 {
//                     "name": "AGGREGATION_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATION_POLICIES"
//                 },
//                 {
//                     "name": "ALERT_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ALERT_HISTORY"
//                 },
//                 {
//                     "name": "AUTOMATIC_CLUSTERING_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
//                 },
//                 {
//                     "name": "CLASSES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASSES"
//                 },
//                 {
//                     "name": "CLASS_INSTANCES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASS_INSTANCES"
//                 },
//                 {
//                     "name": "COLUMNS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COLUMNS"
//                 },
//                 {
//                     "name": "COMPLETE_TASK_GRAPHS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COMPLETE_TASK_GRAPHS"
//                 },
//                 {
//                     "name": "COPY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY"
//                 },
//                 {
//                     "name": "DATABASES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASES"
//                 },
//                 {
//                     "name": "DATABASE_REPLICATION_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_REPLICATION_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "DATABASE_STORAGE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "DATA_CLASSIFICATION_LATEST",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST"
//                 },
//                 {
//                     "name": "DATA_QUALITY_MONITORING_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_QUALITY_MONITORING_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "DATA_TRANSFER_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_TRANSFER_HISTORY"
//                 },
//                 {
//                     "name": "ELEMENT_TYPES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ELEMENT_TYPES"
//                 },
//                 {
//                     "name": "EVENT_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EVENT_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "EXTERNAL_ACCESS_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EXTERNAL_ACCESS_HISTORY"
//                 },
//                 {
//                     "name": "FIELDS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FIELDS"
//                 },
//                 {
//                     "name": "FILE_FORMATS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FILE_FORMATS"
//                 },
//                 {
//                     "name": "GRANTS_TO_ROLES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_ROLES"
//                 },
//                 {
//                     "name": "GRANTS_TO_USERS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_USERS"
//                 },
//                 {
//                     "name": "HYBRID_TABLE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.HYBRID_TABLE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "LOAD_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOAD_HISTORY"
//                 },
//                 {
//                     "name": "LOCK_WAIT_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOCK_WAIT_HISTORY"
//                 },
//                 {
//                     "name": "LOGIN_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY"
//                 },
//                 {
//                     "name": "MASKING_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MASKING_POLICIES"
//                 },
//                 {
//                     "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
//                 },
//                 {
//                     "name": "METERING_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "METERING_HISTORY                ",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_HISTORY"
//                 },
//                 {
//                     "name": "NETWORK_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_POLICIES"
//                 },
//                 {
//                     "name": "NETWORK_RULES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULES"
//                 },
//                 {
//                     "name": "NETWORK_RULE_REFERENCES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULE_REFERENCES"
//                 },
//                 {
//                     "name": "OBJECT_DEPENDENCIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.OBJECT_DEPENDENCIES"
//                 },
//                 {
//                     "name": "PASSWORD_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PASSWORD_POLICIES"
//                 },
//                 {
//                     "name": "PIPES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPES"
//                 },
//                 {
//                     "name": "PIPE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "POLICY_REFERENCES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.POLICY_REFERENCES"
//                 },
//                 {
//                     "name": "PROCEDURES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROCEDURES"
//                 },
//                 {
//                     "name": "PROJECTION_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROJECTION_POLICIES"
//                 },
//                 {
//                     "name": "QUERY_ACCELERATION_ELIGIBLE",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_ACCELERATION_ELIGIBLE"
//                 },
//                 {
//                     "name": "QUERY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY"
//                 },
//                 {
//                     "name": "REFERENTIAL_CONSTRAINTS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REFERENTIAL_CONSTRAINTS"
//                 },
//                 {
//                     "name": "REPLICATION_GROUP_REFRESH_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
//                 },
//                 {
//                     "name": "REPLICATION_GROUP_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "REPLICATION_GROUP_REFRESH_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
//                 },
//                 {
//                     "name": "REPLICATION_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "ROLES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROLES"
//                 },
//                 {
//                     "name": "ROW_ACCESS_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROW_ACCESS_POLICIES"
//                 },
//                 {
//                     "name": "SCHEMATA",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SCHEMATA"
//                 },
//                 {
//                     "name": "SEARCH_OPTIMIZATION_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SEARCH_OPTIMIZATION_HISTORY"
//                 },
//                 {
//                     "name": "SERVICES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SERVICES"
//                 },
//                 {
//                     "name": "SESSIONS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSIONS"
//                 },
//                 {
//                     "name": "SESSION_POLICIES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSION_POLICIES"
//                 },
//                 {
//                     "name": "SNOWPARK_CONTAINER_SERVICES_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPARK_CONTAINER_SERVICES_HISTORY"
//                 },
//                 {
//                     "name": "SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY"
//                 },
//                 {
//                     "name": "SNOWPIPE_STREAMING_CLIENT_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_CLIENT_HISTORY"
//                 },
//                 {
//                     "name": "STAGES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STAGES"
//                 },
//                 {
//                     "name": "STORAGE_USAGE",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
//                 },
//                 {
//                     "name": "TABLES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLES"
//                 },
//                 {
//                     "name": "TABLE_CONSTRAINTS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_CONSTRAINTS"
//                 },
//                 {
//                     "name": "TABLE_STORAGE_METRICS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS"
//                 },
//                 {
//                     "name": "TAGS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAGS"
//                 },
//                 {
//                     "name": "TAG_REFERENCES",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES"
//                 },
//                 {
//                     "name": "TASK_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY"
//                 },
//                 {
//                     "name": "TASK_VERSIONS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_VERSIONS"
//                 },
//                 {
//                     "name": "USERS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.USERS"
//                 },
//                 {
//                     "name": "VIEWS",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.VIEWS"
//                 },
//                 {
//                     "name": "WAREHOUSE_EVENTS_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_EVENTS_HISTORY"
//                 },
//                 {
//                     "name": "WAREHOUSE_LOAD_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_LOAD_HISTORY"
//                 },
//                 {
//                     "name": "WAREHOUSE_METERING_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY"
//                 }
//             ]
//         },
//         "outputParameters": {
//             "USAGE_DATE": "19769",
//             "STORAGE_BYTES": "0.000000",
//             "STAGE_BYTES": "2871.000000",
//             "FAILSAFE_BYTES": "0.000000",
//             "HYBRID_TABLE_STORAGE_BYTES": "0.000000"
//         },
//         "id": "1203.9"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1b231574a22f5d1a0d5c/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
//         "Api_Name": "Snowflake_Organization_Usage",
//         "integrationName": "Organization Usage",
//         "no": 1203.9,
//         "PathParameters": {
//             "domain": ""
//         },
//         "inputParameters": {},
//         "body": {
//             "statement": [
//                 {
//                     "name": "ACCOUNTS",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
//                 },
//                 {
//                     "name": "AUTOMATIC_CLUSTERING_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
//                 },
//                 {
//                     "name": "CONTRACT_ITEMS",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.CONTRACT_ITEMS"
//                 },
//                 {
//                     "name": "DATABASE_STORAGE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "DATA_TRANSFER_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "MARKETPLACE_DISBURSEMENT_REPORT",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
//                 },
//                 {
//                     "name": "MARKETPLACE_PAID_USAGE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
//                 },
//                 {
//                     "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
//                 },
//                 {
//                     "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
//                 },
//                 {
//                     "name": "METERING_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.METERING_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "MONETIZED_USAGE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MONETIZED_USAGE_DAILY"
//                 },
//                 {
//                     "name": "PIPE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PIPE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "PREVIEW_CONTRACT_ITEMS",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_CONTRACT_ITEMS"
//                 },
//                 {
//                     "name": "PREVIEW_DATA_TRANSFER_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_DATA_TRANSFER_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "PREVIEW_METERING_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_METERING_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "PREVIEW_RATE_SHEET_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
//                 },
//                 {
//                     "name": "PREVIEW_REMAINING_BALANCE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
//                 },
//                 {
//                     "name": "PREVIEW_STORAGE_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_STORAGE_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "PREVIEW_USAGE_IN_CURRENCY_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_USAGE_IN_CURRENCY_DAILY"
//                 },
//                 {
//                     "name": "QUERY_ACCELERATION_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.QUERY_ACCELERATION_HISTORY"
//                 },
//                 {
//                     "name": "RATE_SHEET_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
//                 },
//                 {
//                     "name": "REMAINING_BALANCE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
//                 },
//                 {
//                     "name": "REPLICATION_GROUP_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "REPLICATION_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "SEARCH_OPTIMIZATION_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
//                 },
//                 {
//                     "name": "STAGE_STORAGE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "STORAGE_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STORAGE_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "USAGE_IN_CURRENCY_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
//                 },
//                 {
//                     "name": "WAREHOUSE_METERING_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY"
//                 }
//             ]
//         },
//         "outputParameters":  {
// "ORGANIZATION_NAME": "AXOIIHB",
// "CONTRACT_NUMBER": "207684",
// "ACCOUNT_NAME": "OF84409",
// "ACCOUNT_LOCATOR": "SJ62485",
// "REGION": "AZURE_CENTRALINDIA",
// "SERVICE_LEVEL": "Standard",
// "USAGE_DATE": "19802",
// "USAGE_TYPE": "overage-serverless tasks",
// "USAGE": "0.003",
// "CURRENCY": "USD",
// "USAGE_IN_CURRENCY": "0.01",
// "BALANCE_SOURCE": "Overage",
// "BILLING_TYPE": "CONSUMPTION",
// "RATING_TYPE": "COMPUTE",
// "SERVICE_TYPE": "SERVERLESS_TASK",
// "IS_ADJUSTMENT": "false"
// },
//         "id": "1203.9"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1b231574a22f5d1a0p4c/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
//         "Api_Name": "Snowflake Organization Usage",
//         "integrationName": "Snowflake_Pipeline",
//         "no": 1203.9,
//         "PathParameters": {
//             "domain": ""
//         },
//         "inputParameters": {},
//         "body": {
//             "statement": [
//                 {
//                     "name": "ACCOUNTS",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
//                 },
//                 {
//                     "name": "AUTOMATIC_CLUSTERING_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
//                 },
//                 {
//                     "name": "DATABASE_STORAGE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "DATA_TRANSFER_DAILY_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
//                 },
//                 {
//                     "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "PREVIEW_RATE_SHEET_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
//                 },
//                 {
//                     "name": "PREVIEW_REMAINING_BALANCE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
//                 },
//                 {
//                     "name": "RATE_SHEET_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
//                 },
//                 {
//                     "name": "REMAINING_BALANCE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
//                 },
//                 {
//                     "name": "REPLICATION_GROUP_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "REPLICATION_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
//                 },
//                 {
//                     "name": "SEARCH_OPTIMIZATION_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
//                 },
//                 {
//                     "name": "STAGE_STORAGE_USAGE_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
//                 }
//             ]
//         },
//         "outputParameters":  {
// "ORGANIZATION_NAME": "AXOIIHB",
// "CONTRACT_NUMBER": "207684",
// "ACCOUNT_NAME": "OF84409",
// "ACCOUNT_LOCATOR": "SJ62485",
// "REGION": "AZURE_CENTRALINDIA",
// "SERVICE_LEVEL": "Standard",
// "USAGE_DATE": "19802",
// "USAGE_TYPE": "overage-serverless tasks",
// "USAGE": "0.003",
// "CURRENCY": "USD",
// "USAGE_IN_CURRENCY": "0.01",
// "BALANCE_SOURCE": "Overage",
// "BILLING_TYPE": "CONSUMPTION",
// "RATING_TYPE": "COMPUTE",
// "SERVICE_TYPE": "SERVERLESS_TASK",
// "IS_ADJUSTMENT": "false"
// },
//         "id": "1203.9"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65dc619b1b707d34e937b8be/instances/list").reply(200, {
//   entities:[
//     {
//         "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
//         "Api_Name": "Snowflake DATA SHARING USAGE",
//         "integrationName": "DATA SHARING USAGE",
//         "no": 1203.9,
//         "PathParameters": {
//             "domain": ""
//         },
//         "inputParameters": {},
//         "body": {
//             "statement": [
//                 {
//                     "name": "APPLICATION_STATE",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE"
//                 },
//                 {
//                     "name": "LISTING_ACCESS_HISTORY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_ACCESS_HISTORY"
//                 },
//                 {
//                     "name": "LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY"
//                 },
//                 {
//                     "name": "LISTING_AUTO_FULFILLMENT_REFRESH_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_REFRESH_DAILY"
//                 },
//                 {
//                     "name": "LISTING_CONSUMPTION_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_CONSUMPTION_DAILY"
//                 },
//                 {
//                     "name": "LISTING_EVENTS_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_EVENTS_DAILY"
//                 },
//                 {
//                     "name": "MARKETPLACE_DISBURSEMENT_REPORT",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
//                 },
//                 {
//                     "name": "MARKETPLACE_PAID_USAGE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
//                 },
//                 {
//                     "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
//                 },
//                 {
//                     "name": "MONETIZED_USAGE_DAILY",
//                     "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MONETIZED_USAGE_DAILY"
//                 }
//             ],
//             "timeout": "1000",
//             "database": "GAIAN1",
//             "schema": "TABLE1",
//             "warehouse": "FIRST_WAREHOUSE",
//             "role": "ACCOUNTADMIN"
//         },
//         "outputParameters": {
//             "resultSetMetaData": {
//                 "numRows": 91,
//                 "format": "jsonv2",
//                 "partitionInfo": [
//                     {
//                         "rowCount": 91,
//                         "uncompressedSize": 13354
//                     }
//                 ],
//                 "rowType": [
//                     {
//                         "name": "CREATED_ON",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": 0,
//                         "scale": 6,
//                         "byteLength": "null",
//                         "collation": "null",
//                         "type": "timestamp_ltz",
//                         "length": "null"
//                     },
//                     {
//                         "name": "MODIFIED_ON",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": 0,
//                         "scale": 6,
//                         "byteLength": "null",
//                         "collation": "null",
//                         "type": "timestamp_ltz",
//                         "length": "null"
//                     },
//                     {
//                         "name": "PRIVILEGE",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "GRANTED_ON",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "NAME",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "TABLE_CATALOG",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "TABLE_SCHEMA",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "GRANTED_TO",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": false,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 64,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16
//                     },
//                     {
//                         "name": "GRANTEE_NAME",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "GRANT_OPTION",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": "null",
//                         "collation": "null",
//                         "type": "boolean",
//                         "length": "null"
//                     },
//                     {
//                         "name": "GRANTED_BY",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "DELETED_ON",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": 0,
//                         "scale": 6,
//                         "byteLength": "null",
//                         "collation": "null",
//                         "type": "timestamp_ltz",
//                         "length": "null"
//                     },
//                     {
//                         "name": "GRANTED_BY_ROLE_TYPE",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     },
//                     {
//                         "name": "OBJECT_INSTANCE",
//                         "database": "SNOWFLAKE",
//                         "schema": "ACCOUNT_USAGE",
//                         "table": "GRANTS_TO_ROLES$V15",
//                         "nullable": true,
//                         "precision": "null",
//                         "scale": "null",
//                         "byteLength": 16777216,
//                         "collation": "null",
//                         "type": "text",
//                         "length": 16777216
//                     }
//                 ]
//             },
//             "data": [
//                 [
//                     "1708524704.367000",
//                     "1708524704.367000",
//                     "OWNERSHIP",
//                     "WAREHOUSE",
//                     "FIRST_WAREHOUSE",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "PUBLIC",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708524869.215000",
//                     "1708580448.180000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "TABLE1",
//                     "GAIAN",
//                     "TABLE1",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "PUBLIC",
//                     "1708580448.180000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708526109.809000",
//                     "1708526109.809000",
//                     "USAGE",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "PUBLIC",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708522524.409000",
//                     "1708522524.409000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "PUBLIC",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708522497.374000",
//                     "1708522497.374000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "SAI",
//                     "SAI",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "PUBLIC",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708580551.227000",
//                     "1708580551.227000",
//                     "OWNERSHIP",
//                     "WAREHOUSE",
//                     "GAIAN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "USERADMIN",
//                     "true",
//                     "USERADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708580448.181000",
//                     "1708584315.376000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "TABLE1",
//                     "GAIAN",
//                     "TABLE1",
//                     "ROLE",
//                     "USERADMIN",
//                     "true",
//                     "USERADMIN",
//                     "1708584315.376000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708519661.569000",
//                     "1708524704.365000",
//                     "OWNERSHIP",
//                     "WAREHOUSE",
//                     "FIRST_WAREHOUSE",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "1708524704.365000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708519765.608000",
//                     "1708519765.608000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "PUBLIC",
//                     "FIRST_PROJECT2",
//                     "PUBLIC",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708521332.617000",
//                     "1708521332.617000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "FIRST",
//                     "FIRST_PROJECT2",
//                     "FIRST",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584596.154000",
//                     "1708584596.154000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "PUBLIC",
//                     "GAIAN1",
//                     "PUBLIC",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708520285.996000",
//                     "1708520285.996000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "PUBLIC",
//                     "GAIAN",
//                     "PUBLIC",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708519478.122000",
//                     "1708519478.122000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "PUBLIC",
//                     "FIRST_PROJECT",
//                     "PUBLIC",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708519478.097000",
//                     "1708519478.097000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "FIRST_PROJECT",
//                     "FIRST_PROJECT",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708520285.973000",
//                     "1708522524.408000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "1708522524.408000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708522148.326000",
//                     "1708522148.326000",
//                     "MONITOR",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "false",
//                     "SYSADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708522165.488000",
//                     "1708522519.390000",
//                     "MONITOR",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "SYSADMIN",
//                     "1708522519.390000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708522193.840000",
//                     "1708522519.376000",
//                     "USAGE",
//                     "DATABASE",
//                     "GAIAN",
//                     "GAIAN",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "true",
//                     "SYSADMIN",
//                     "1708522519.376000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708519765.584000",
//                     "1708583286.430000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "FIRST_PROJECT2",
//                     "FIRST_PROJECT2",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "SYSADMIN",
//                     "1708583286.430000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708069446.741000",
//                     "1708580551.222000",
//                     "OWNERSHIP",
//                     "WAREHOUSE",
//                     "GAIAN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "1708580551.222000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707659086.091000",
//                     "1707659086.091000",
//                     "OWNERSHIP",
//                     "WAREHOUSE",
//                     "COMPUTE_WH",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708072713.115000",
//                     "1708072713.115000",
//                     "OWNERSHIP",
//                     "USER",
//                     "SAI",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708072612.173000",
//                     "1708072612.173000",
//                     "OWNERSHIP",
//                     "NETWORK POLICY",
//                     "sai",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707659962.486000",
//                     "1707659962.486000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "PUBLIC",
//                     "SAI",
//                     "PUBLIC",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708073129.826000",
//                     "1708073129.826000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "KIRAN",
//                     "SAI",
//                     "KIRAN",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584596.704000",
//                     "1708584596.704000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "TABLE1",
//                     "GAIAN1",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584315.377000",
//                     "1708584315.377000",
//                     "OWNERSHIP",
//                     "SCHEMA",
//                     "TABLE1",
//                     "GAIAN",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584027.315000",
//                     "1708584027.315000",
//                     "OWNERSHIP",
//                     "TABLE",
//                     "FILETABLE1",
//                     "GAIAN",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584596.319000",
//                     "1708584596.319000",
//                     "OWNERSHIP",
//                     "TABLE",
//                     "FILETABLE1",
//                     "GAIAN1",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708580089.708000",
//                     "1708580089.708000",
//                     "OWNERSHIP",
//                     "INTEGRATION",
//                     "SAI",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708582216.459000",
//                     "1708582216.459000",
//                     "OWNERSHIP",
//                     "INTEGRATION",
//                     "BHAI",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708580504.191000",
//                     "1708580504.191000",
//                     "OWNERSHIP",
//                     "INTEGRATION",
//                     "SAIKIRAN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708583934.686000",
//                     "1708583934.686000",
//                     "OWNERSHIP",
//                     "FILE FORMAT",
//                     "FILE1",
//                     "GAIAN",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584596.232000",
//                     "1708584596.232000",
//                     "OWNERSHIP",
//                     "FILE FORMAT",
//                     "FILE1",
//                     "GAIAN1",
//                     "TABLE1",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707658986.851000",
//                     "1707658986.851000",
//                     "USAGE",
//                     "DATABASE",
//                     "SNOWFLAKE_SAMPLE_DATA",
//                     "SNOWFLAKE_SAMPLE_DATA",
//                     "null",
//                     "ROLE",
//                     "PUBLIC",
//                     "false",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707658985.822000",
//                     "1707658985.822000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "SNOWFLAKE_SAMPLE_DATA",
//                     "SNOWFLAKE_SAMPLE_DATA",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707659962.465000",
//                     "1708522497.372000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "SAI",
//                     "SAI",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "1708522497.372000",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708583286.432000",
//                     "1708583286.432000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "FIRST_PROJECT2",
//                     "FIRST_PROJECT2",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1708584596.043000",
//                     "1708584596.043000",
//                     "OWNERSHIP",
//                     "DATABASE",
//                     "GAIAN1",
//                     "GAIAN1",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "ACCOUNTADMIN",
//                     "null",
//                     "ROLE",
//                     "null"
//                 ],
//                 [
//                     "1707658980.466000",
//                     "1707658980.466000",
//                     "CREATE ACCOUNT",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.467000",
//                     "1707658980.467000",
//                     "CREATE API INTEGRATION",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.485000",
//                     "1707658980.485000",
//                     "MODIFY SESSION TRACE LEVEL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.453000",
//                     "1707658980.453000",
//                     "CREATE ROLE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "USERADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.477000",
//                     "1707658980.477000",
//                     "MONITOR SECURITY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.462000",
//                     "1707658980.462000",
//                     "CREATE APPLICATION",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.462000",
//                     "1707658980.462000",
//                     "MONITOR USAGE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.459000",
//                     "1707658980.459000",
//                     "CREATE WAREHOUSE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.465000",
//                     "1707658980.465000",
//                     "OVERRIDE SHARE RESTRICTIONS",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.481000",
//                     "1707658980.481000",
//                     "MANAGE ACCOUNT SUPPORT CASES",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.489000",
//                     "1707658980.489000",
//                     "APPLY RESOURCE GROUP",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.463000",
//                     "1707658980.463000",
//                     "IMPORT SHARE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.445000",
//                     "1707658980.445000",
//                     "USAGE",
//                     "ROLE",
//                     "SYSADMIN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.452000",
//                     "1707658980.452000",
//                     "CREATE USER",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "USERADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.454000",
//                     "1707658980.454000",
//                     "CREATE NETWORK POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.457000",
//                     "1707658980.457000",
//                     "APPLY PASSWORD POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.489000",
//                     "1707658980.489000",
//                     "CANCEL QUERY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.629000",
//                     "1707658980.629000",
//                     "MANAGE ORGANIZATION SUPPORT CASES",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ORGADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.479000",
//                     "1707658980.479000",
//                     "PURCHASE DATA EXCHANGE LISTING",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.485000",
//                     "1707658980.485000",
//                     "RESOLVE ALL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.455000",
//                     "1707658980.455000",
//                     "ATTACH POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.466000",
//                     "1707658980.466000",
//                     "CREATE INTEGRATION",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.468000",
//                     "1707658980.468000",
//                     "MANAGE WAREHOUSES",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.482000",
//                     "1707658980.482000",
//                     "MANAGE USER SUPPORT CASES",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.457000",
//                     "1707658980.457000",
//                     "APPLY AUTHENTICATION POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.470000",
//                     "1707658980.470000",
//                     "EXECUTE ALERT",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.456000",
//                     "1707658980.456000",
//                     "MANAGE GRANTS",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.459000",
//                     "1707658980.459000",
//                     "CREATE DATABASE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.493000",
//                     "1707658980.493000",
//                     "MANAGE EVENT SHARING",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.484000",
//                     "1707658980.484000",
//                     "MODIFY SESSION LOG LEVEL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.484000",
//                     "1707658980.484000",
//                     "MODIFY TRACE LEVEL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.470000",
//                     "1707658980.470000",
//                     "EXECUTE TASK",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.480000",
//                     "1707658980.480000",
//                     "CREATE REPLICATION GROUP",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.483000",
//                     "1707658980.483000",
//                     "MODIFY LOG LEVEL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.485000",
//                     "1707658980.485000",
//                     "AUDIT",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.483000",
//                     "1707658980.483000",
//                     "CREATE CREDENTIAL",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.628000",
//                     "1707658980.628000",
//                     "MANAGE LISTING AUTO FULFILLMENT",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ORGADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.477000",
//                     "1707658980.477000",
//                     "CREATE DATA EXCHANGE LISTING",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.462000",
//                     "1707658980.462000",
//                     "CREATE SHARE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.456000",
//                     "1707658980.456000",
//                     "APPLY SESSION POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.480000",
//                     "1707658980.480000",
//                     "CREATE FAILOVER GROUP",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.473000",
//                     "1707658980.473000",
//                     "MONITOR EXECUTION",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.460000",
//                     "1707658980.460000",
//                     "BIND SERVICE ENDPOINT",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SYSADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.443000",
//                     "1707658980.443000",
//                     "USAGE",
//                     "ROLE",
//                     "USERADMIN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.444000",
//                     "1707658980.444000",
//                     "USAGE",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.476000",
//                     "1707658980.476000",
//                     "EXECUTE DATA METRIC FUNCTION",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.470000",
//                     "1707658980.470000",
//                     "EXECUTE MANAGED TASK",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.487000",
//                     "1707658980.487000",
//                     "MONITOR",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.474000",
//                     "1707658980.474000",
//                     "APPLY MASKING POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.632000",
//                     "1707658980.632000",
//                     "PURCHASE DATA EXCHANGE LISTING",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ORGADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.459000",
//                     "1707658980.459000",
//                     "APPLY PACKAGES POLICY",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "SECURITYADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ],
//                 [
//                     "1707658980.461000",
//                     "1707658980.461000",
//                     "CREATE APPLICATION PACKAGE",
//                     "ACCOUNT",
//                     "SJ62485",
//                     "null",
//                     "null",
//                     "ROLE",
//                     "ACCOUNTADMIN",
//                     "true",
//                     "null",
//                     "null",
//                     "null",
//                     "null"
//                 ]
//             ],
//             "code": "090001",
//             "statementStatusUrl": "/api/v2/statements/01b29a6d-0001-187e-0000-00037812b4f5?requestId=5021817a-a6df-4463-acad-95e7676bfef7",
//             "requestId": "5021817a-a6df-4463-acad-95e7676bfef7",
//             "sqlState": "00000",
//             "statementHandle": "01b29a6d-0001-187e-0000-00037812b4f5",
//             "message": "Statement executed successfully.",
//             "createdOn": 1708929475689
//         },
//         "id": "1203.9"
//     }
// ]

// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77acd1e40c81a6bc9d1c0/instances/list").reply(200, {
//   entities: [
//     {
//         "analyticsStyleName": "API Utilization",
//         "analyticsStyleDescription": "Tracking API calls to Okta services.",
//         "createdBy": "Jackie",
//         "collectionOfAQs": [],
//         "createdOn": "2024-04-15T05:39:10.038Z",
//         "id": "2024-04-15T05:39:10.039Z"
//     },
//     {
//         "analyticsStyleName": "Role based Utilization",
//         "analyticsStyleDescription": "Identifying Okta usage patterns based on user roles.",
//         "createdBy": "Jackie",
//         "collectionOfAQs": [],
//         "createdOn": "2024-04-15T13:36:31.598Z",
//         "id": "2024-04-15T13:36:31.598Z"
//     }
// ]


// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77b371e40c81a6bc9d1c3/instances/list").reply(200, {
//   entities: [
//     {
//         "analyticsStyleName": "Costs Appropriation",
//         "analyticsStyleDescription": "Analyzing costs associated with OpenAI usage.",
//         "createdBy": "Jackie c",
//         "collectionOfAQs": [
//             "6560793540eb1835fe4d05de",
//             "65607e8e40eb1835fe4d05ee"
//         ],
//         "createdOn": "2024-03-14T05:39:10.038Z",
//         "id": "2024-03-14T05:39:10.039Z"
//     },
//     {
//         "analyticsStyleName": "Role based Utilization",
//         "analyticsStyleDescription": "Identifying OpenAI usage patterns based on user roles.",
//         "createdBy": "Jackie",
//         "collectionOfAQs": [],
//         "createdOn": "2024-02-14T05:39:10.038Z",
//         "id": "2024-01-14T05:39:10.039Z"
//     }
// ]


// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77b181e40c81a6bc9d1c1/instances/list").reply(200, {
//   entities:  [
//     {
//        "analyticsStyleName": "Storage Consumption",
//        "analyticsStyleDescription": "Snowflake storage usage analysis.",
//        "createdBy": "Jackie",
//        "collectionOfAQs": [
//         "65658aec367e4160070e86f9",
//         "65604b6059570d3e1663dd8f",
//         "6560472059570d3e1663dd4d"
//        ],
//        "createdOn": "2024-03-16T05:39:10.038Z",
//        "id": "2024-03-16T05:39:10.039Z"
//    },
//    {
//        "analyticsStyleName": "API Utilization",
//        "analyticsStyleDescription": "Measuring API calls made to Snowflake.",
//        "createdBy": "Jackie",
//        "collectionOfAQs": [],
//        "createdOn": "2024-03-16T05:39:10.038Z",
//        "id": "2024-03-17T05:39:10.039Z"
//    },
//    {
//        "analyticsStyleName": "Costs Appropriation",
//        "analyticsStyleDescription": "Analyzing costs associated with Snowflake usage.",
//        "createdBy": "Jackie",
//        "collectionOfAQs": [
//         "6560793540eb1835fe4d05de",
//         "65607e8e40eb1835fe4d05ee"
//        ],
//        "createdOn": "2024-03-16T05:39:10.038Z",
//        "id": "2024-03-19T05:39:10.039Z"
//    },
//    {
//        "analyticsStyleName": "Product Categorization",
//        "analyticsStyleDescription": "Categorizing Snowflake products and services usage.",
//        "createdBy": "Jackie",
//        "collectionOfAQs": [],
//        "createdOn": "2024-03-16T05:39:10.038Z",
//        "id": "2024-03-18T05:39:10.039Z"
//    }
// ]


// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65523f7a060abb4a5ff3c0c4/instances/list").reply(200, {
//   entities: [
//     {
//         "BQ_Name": "Usage by Product over MoM",
//         "rawQuery": "WITH monthly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM') AS month, TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon') AS X_Axis, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_usage\")::numeric, 2) AS numeric) AS total_usage FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '12 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM'), TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon'), \"entity.Mobius_PI_product_type\"), monthly_change AS (SELECT month, X_Axis, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY month) AS prev_month_usage FROM monthly_usage) SELECT month, X_Axis AS x_axis, product_type, total_usage, CAST(ROUND(CAST(CASE WHEN prev_month_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_month_usage) / prev_month_usage) * 100 ELSE 0 END AS numeric), 2) AS numeric) AS y_axis FROM monthly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(month, 'YYYY-MM')::date) ORDER BY product_type, month DESC",
//         "BQ_Description": "Average usage of product month over month",
//         "BQ_Id": "65658aec367e4160070e86f9",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Feb 2024"
//     },
//     {
//         "BQ_Name": "Usage by Product over QoQ",
//         "rawQuery": "WITH quarterly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q') AS quarter, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_usage\")::numeric, 2) AS numeric) AS total_usage FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '36 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q'), \"entity.Mobius_PI_product_type\"), quarterly_change AS (SELECT quarter, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY quarter) AS prev_quarter_usage FROM quarterly_usage) SELECT quarter, product_type, total_usage, CAST(ROUND(CAST(CASE WHEN prev_quarter_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_quarter_usage) / prev_quarter_usage) * 100 ELSE 0 END AS numeric), 2) AS numeric) AS qoq_percentage_change FROM quarterly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(quarter, 'YYYY-Q')::date) ORDER BY product_type, quarter DESC",
//         "BQ_Description": "Average usage of product quarter on quarter",
//         "BQ_Id": "65604b6059570d3e1663dd8f",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 20 Feb 2024"
//     },
//     {
//         "BQ_Name": "Usage by Product Over YoY",
//         "rawQuery": "WITH yearly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY') AS X_Axis, \"entity.Mobius_PI_product_type\" AS product_type, SUM(\"entity.Mobius_PI_total_usage\") AS total_usage FROM t_655340cba34e3b716bd16b3e_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '5 years' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY'), \"entity.Mobius_PI_product_type\"), monthly_change AS (SELECT X_Axis, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY X_Axis) AS prev_month_usage FROM yearly_usage) SELECT X_Axis, X_Axis, product_type, total_usage, ROUND(CAST(CASE WHEN prev_month_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_month_usage) / prev_month_usage) * 100 ELSE 0 END AS numeric), 2) AS Y_Axis FROM monthly_change ORDER BY product_type, X_Axis DESC",
//         "BQ_Description": "Average usage of product year on year",
//         "BQ_Id": "6560472059570d3e1663dd4d",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     },
//     {
//         "BQ_Name": "Cost Distribution by User Over MoM",
//         "rawQuery": "WITH monthly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM') AS month, TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon') AS X_Axis, \"entity.Mobius_PI_user_type\" AS user_type, SUM(\"entity.Mobius_PI_total_cost\") AS total_cost FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= DATE_TRUNC('year', CURRENT_DATE) AND \"entity.Mobius_PI_date\"::timestamp <= CURRENT_DATE AND \"entity.Mobius_PI_user_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM'), TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon'), \"entity.Mobius_PI_user_type\"), monthly_change AS (SELECT month, X_Axis, user_type, total_cost, LAG(total_cost) OVER (PARTITION BY user_type ORDER BY month) AS prev_month_cost FROM monthly_usage) SELECT month, X_Axis, user_type, CAST(total_cost as numeric(10,2)), ROUND(CAST(CASE WHEN prev_month_cost IS NOT NULL AND total_cost != 0 THEN ((total_cost - prev_month_cost) / prev_month_cost) * 100 ELSE 0 END AS numeric), 2) AS Y_Axis FROM monthly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(month, 'YYYY-MM')::date) ORDER BY user_type, month DESC",
//         "BQ_Description": "OverAll cost consumed by the user month on month",
//         "BQ_Id": "6560793540eb1835fe4d05de",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     },
//     {
//         "BQ_Name": "Cost Distribution by User Over QoQ",
//         "rawQuery": "WITH quarterly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q') AS quarter, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_cost\")::numeric, 2) AS numeric) AS total_cost  FROM t_655c95a5e2994a674b7b8cdf_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '36 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q'), \"entity.Mobius_PI_product_type\"), quarterly_change AS (SELECT quarter, product_type, total_cost, LAG(total_cost) OVER (PARTITION BY product_type ORDER BY quarter) AS prev_quarter_cost FROM quarterly_usage) SELECT quarter AS X_Axis, product_type, total_cost, ROUND(CAST(CASE WHEN prev_quarter_cost IS NOT NULL AND total_cost != 0 THEN ((total_cost - prev_quarter_cost) / prev_quarter_cost) * 100 ELSE 0 END AS numeric), 2) AS y_axis FROM quarterly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(quarter, 'YYYY-Q')::date) ORDER BY product_type, quarter DESC",
//         "BQ_Description": "OverAll cost consumed by the user quarter on quarter",
//         "BQ_Id": "65607e8e40eb1835fe4d05ee",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     }
// ]


// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d3369f1b707d34e9375580/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.CostManagement/forecast",
//         "Api_Name": "ForecastedCostData",
//         "PlatformName": "AZURE",
//         "integrationName": "Azure Cost Analysis",
//         "PathParameters": {
//             "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//         },
//         "inputParameters": {
//             "api_version": "2021-10-01",
//             "%24top": "5000"
//         },
//         "body": {
//             "type": "ActualCost",
//             "dataSet": {
//                 "granularity": "Daily",
//                 "aggregation": {
//                     "totalCost": {
//                         "name": "Cost",
//                         "function": "Sum"
//                     }
//                 },
//                 "sorting": [
//                     {
//                         "direction": "ascending",
//                         "name": "UsageDate"
//                     }
//                 ],
//                 "filter": {
//                     "Dimensions": {
//                         "Name": "PublisherType",
//                         "Operator": "In",
//                         "Values": [
//                             "azure"
//                         ]
//                     }
//                 }
//             },
//             "includeActualCost": true,
//             "includeFreshPartialCost": false,
//             "timePeriod": {
//                 "from": "2024-02-10T00:00:00+00:00",
//                 "to": "2024-02-19T23:59:59+00:00"
//             }
//         },
//         "outputParameters":  {
//             "Cost": 25.132242,
//             "UsageDate": 20240210,
//             "CostStatus": "Actual",
//             "Currency": "INR",
//             "timestamp": 1711707900000
//           },
//         "no": 29.0,
//         "id": "29.0"
//     }
// ]


// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cdab711b707d34e93752c4/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://management.azure.com/subscriptions/cbd09df3-41d7-479d-aebf-eef705920c01/resourceGroups/cloud-shell-storage-centralindia/providers/Microsoft.Storage/storageAccounts/mohammedsaleem/providers/microsoft.Insights/metrics",
//         "Api_Name": "StorageIngress",
//         "PlatformName": "Azure",
//         "integrationName": "StrorageAccount",
//         "no": 33.0,
//         "body": {},
//         "PathParameters": {
//             "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01",
//             "storageAccountName": "mohammedsaleem",
//             "api_version": "2019-07-01"
//         },
//         "inputParameters": {
//             "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-02-09T07%3A05%3A00.000Z",
//             "interval": "PT5M",
//             "metricnames": "Ingress",
//             "aggregation": "total",
//             "metricNamespace": "microsoft.storage%2Fstorageaccounts",
//             "autoadjusttimegrain": true,
//             "validatedimensions": false
//         },
//         "outputParameters": {
//             "cost": 244,
//             "timespan": "2024-02-09T03:00:00Z/2024-02-09T07:05:00Z",
//             "interval": "PT5M",
//             "value": [
//                 {
//                     "id": "/subscriptions/cbd09df3-41d7-479d-aebf-eef705920c01/resourceGroups/cloud-shell-storage-centralindia/providers/Microsoft.Storage/storageAccounts/mohammedsaleem/providers/Microsoft.Insights/metrics/Ingress",
//                     "type": "Microsoft.Insights/metrics",
//                     "name": {
//                         "value": "Ingress",
//                         "localizedValue": "Ingress"
//                     },
//                     "displayDescription": "The amount of ingress data, in bytes. This number includes ingress from an external client into Azure Storage as well as ingress within Azure.",
//                     "unit": "Bytes",
//                     "timeseries": [
//                         {
//                             "metadatavalues": [],
//                             "data": [
//                                 {
//                                     "timeStamp": "2024-02-09T03:00:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:05:00Z",
//                                     "total": 43439
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:10:00Z",
//                                     "total": 7256
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:15:00Z",
//                                     "total": 21712
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:20:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:25:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:30:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:35:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:40:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:45:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:50:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T03:55:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:00:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:05:00Z",
//                                     "total": 43439
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:10:00Z",
//                                     "total": 7256
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:15:00Z",
//                                     "total": 36186
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:20:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:25:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:30:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:35:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:40:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:45:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:50:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T04:55:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:00:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:05:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:10:00Z",
//                                     "total": 50695
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:15:00Z",
//                                     "total": 36186
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:20:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:25:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:30:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:35:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:40:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:45:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:50:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T05:55:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:00:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:05:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:10:00Z",
//                                     "total": 43439
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:15:00Z",
//                                     "total": 36186
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:20:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:25:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:30:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:35:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:40:00Z",
//                                     "total": 321
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:45:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:50:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T06:55:00Z",
//                                     "total": 0
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-09T07:00:00Z",
//                                     "total": 0
//                                 }
//                             ]
//                         }
//                     ],
//                     "errorCode": "Success"
//                 }
//             ],
//             "namespace": "microsoft.storage/storageaccounts",
//             "resourceregion": "eastus"
//         },
//         "id": "33.0"
//     }
// ]
// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cc8e5d1b707d34e93751b3/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://management.azure.com/subscriptions/{{subscriptionId}}}/providers/microsoft.insights/eventtypes/management/values",
//         "Api_Name": "StorageActivityLogs",
//         "inputParameters": {
//             "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
//             "api_version": "2015-04-01"
//         },
//         "PathParameters": {
//             "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//         },
//         "body": {},
//         "outputParameters": {
//             "value": [
//                 {
//                     "id": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6/events/0dd26461-67d5-4bca-8504-beb4caff04bd/ticks/638429902746360066",
//                     "level": "Informational",
//                     "resourceGroupName": "edo",
//                     "resourceProviderName": {
//                         "value": "Microsoft.Authorization",
//                         "localizedValue": "Microsoft.Authorization"
//                     },
//                     "resourceId": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6",
//                     "resourceType": {
//                         "value": "Microsoft.Authorization/roleAssignments",
//                         "localizedValue": "Microsoft.Authorization/roleAssignments"
//                     },
//                     "operationId": "ac5911d9-9323-4598-8595-3e2cd93bda9f",
//                     "operationName": {
//                         "value": "Microsoft.Authorization/roleAssignments/write",
//                         "localizedValue": "Create role assignment"
//                     },
//                     "properties": {
//                         "statusCode": "Created",
//                         "serviceRequestId": null,
//                         "eventCategory": "Administrative",
//                         "entity": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6",
//                         "message": "Microsoft.Authorization/roleAssignments/write",
//                         "hierarchy": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//                     },
//                     "status": {
//                         "value": "Succeeded",
//                         "localizedValue": "Succeeded"
//                     },
//                     "subStatus": {
//                         "value": "Created",
//                         "localizedValue": "Created (HTTP Status Code: 201)"
//                     },
//                     "eventTimestamp": "2024-02-08T11:57:54.6360066Z",
//                     "submissionTimestamp": "2024-02-08T11:59:48Z",
//                     "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
//                     "tenantId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
//                 }
//             ]
//         },
//         "no": 4.0,
//         "id": "4.0"
//     }
// ]
// });


// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f14bfc5f353406a916b8dc/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/providers/Microsoft.CostManagement/query?api-version=2021-10-01&%24top=5000",
//         "Api_Name": "CostbyResourceGroupName",
//         "integrationName": "AzureCostAnalysis",
//         "no": 1203.9,
//         "PathParameters": {
//             "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//         },
//         "inputParameters": {
//             "api_version": "2021-10-01"
//         },
//         "body": {
//             "type": "ActualCost",
//             "dataSet": {
//                 "granularity": "Daily",
//                 "aggregation": {
//                     "totalCost": {
//                         "name": "Cost",
//                         "function": "Sum"
//                     },
//                     "totalCostUSD": {
//                         "name": "CostUSD",
//                         "function": "Sum"
//                     }
//                 },
//                 "sorting": [
//                     {
//                         "direction": "ascending",
//                         "name": "UsageDate"
//                     }
//                 ],
//                 "grouping": [
//                     {
//                         "type": "Dimension",
//                         "name": "ResourceGroupName"
//                     }
//                 ]
//             },
//             "timeframe": "Custom",
//             "timePeriod": {
//                 "from": "2024-02-13T00:00:00+00:00",
//                 "to": "2024-02-14T23:59:59+00:00"
//             }
//         },
//         "outputParameters":  {
//             "Cost": 25.132456,
//             "CostUSD": 0.30228624,
//             "UsageDate": 20240212,
//             "ResourceGroupName": "edo",
//             "Currency": "INR",
//             "timestamp": 1711719600000
//           },
//         "id": "1203.9"
//     }
// ]
// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cc6c6f1b707d34e937518e/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Compute/virtualMachines/edovirtual/providers/microsoft.insights/metrics",
//         "Api_Name": "VirtualMachineData",
//         "inputParameters": {
//             "timespan": "string",
//             "interval": "string",
//             "metricnames": "string",
//             "aggregation": "string",
//             "api_version": "string"
//         },
//         "PathParameters": {
//             "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
//         },
//         "body": {},
//         "outputParameters": {
//             "cost": 1439,
//             "timespan": "2024-02-08T00:00:00Z/2024-02-09T00:00:00Z",
//             "interval": "PT1H",
//             "value": [
//                 {
//                     "id": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Compute/virtualMachines/edovirtual/providers/Microsoft.Insights/metrics/Percentage CPU",
//                     "type": "Microsoft.Insights/metrics",
//                     "name": {
//                         "value": "Percentage CPU",
//                         "localizedValue": "Percentage CPU"
//                     },
//                     "displayDescription": "The percentage of allocated compute units that are currently in use by the Virtual Machine(s)",
//                     "unit": "Percent",
//                     "timeseries": [
//                         {
//                             "metadatavalues": [],
//                             "data": [
//                                 {
//                                     "timeStamp": "2024-02-08T00:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T01:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T02:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T03:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T04:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T05:00:00Z"
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T06:00:00Z",
//                                     "average": 4.087
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T07:00:00Z",
//                                     "average": 1.32075
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T08:00:00Z",
//                                     "average": 1.133
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T09:00:00Z",
//                                     "average": 1.1274166666666665
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T10:00:00Z",
//                                     "average": 1.12125
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T11:00:00Z",
//                                     "average": 1.1713333333333333
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T12:00:00Z",
//                                     "average": 1.1854166666666666
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T13:00:00Z",
//                                     "average": 1.1359166666666667
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T14:00:00Z",
//                                     "average": 1.1542016806722688
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T15:00:00Z",
//                                     "average": 1.1782499999999998
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T16:00:00Z",
//                                     "average": 1.1955
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T17:00:00Z",
//                                     "average": 1.1798333333333335
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T18:00:00Z",
//                                     "average": 1.6054166666666667
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T19:00:00Z",
//                                     "average": 1.1652500000000001
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T20:00:00Z",
//                                     "average": 1.16275
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T21:00:00Z",
//                                     "average": 1.1513333333333333
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T22:00:00Z",
//                                     "average": 1.1479166666666667
//                                 },
//                                 {
//                                     "timeStamp": "2024-02-08T23:00:00Z",
//                                     "average": 1.13675
//                                 }
//                             ]
//                         }
//                     ],
//                     "errorCode": "Success"
//                 }
//             ],
//             "namespace": "Microsoft.Compute/virtualMachines",
//             "resourceregion": "eastus"
//         },
//         "no": 91.0,
//         "id": "91.0"
//     }
// ]
// });

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d31b2d1b707d34e937552e/instances/list").reply(200, {
//   entities: [
//     {
//         "url": "https://api.openai.com/dashboard/billing/usage",
//         "Api_Name": "billing usage",
//         "PlatformName": "OPEN AI",
//         "integrationName": "Usage",
//         "no": 45.0,
//         "PathParameters": {},
//         "inputParameters": {
//             "end_date": "2024-03-01",
//             "start_date": "2024-02-01"
//         },
//         "body": {},
//         "outputParameters": {
//             "object": "list",
//             "daily_costs": [
//                 {
//                     "timestamp": 1.7067456E9,
//                     "line_items": [
//                         {
//                             "name": "GPT-4 Turbo",
//                             "cost": 1571.276
//                         },
//                         {
//                             "name": "GPT-4",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "GPT-3.5 Turbo",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "Assistants API",
//                             "cost": 48.0
//                         },
//                         {
//                             "name": "Fine-tuning models",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "Embedding models",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "Base models",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "Image models",
//                             "cost": 0.0
//                         },
//                         {
//                             "name": "Audio models",
//                             "cost": 0.0
//                         }
//                     ]
//                 }
//             ],
//             "total_usage": 12303.158000000003
//         },
//         "id": "45.0"
//     }
// ]
// });
// //
// // Mock POST request to /users
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/1/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
           
//         },
//         "body": {
         
//         },
//         "outputParameters": {
//             "name": "saleem",
//             "age": "Cloud Logging",
//             "address": 0,
//             "phoneNo": "2024-02-12",
//             "adharid":898933434234
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "sample",
//         "Api_Name": "person",
//         "no": 1203
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/2/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
           
//         },
//         "body": {
         
//         },
//         "outputParameters": {
//           "name":"saleem",
//           "employeeId":"123",
//           "departmentId":"edo",
//            "joinDate":"27-11-2009",
//            "designation":"LMTS"
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "sample",
//         "Api_Name": "employee",
//         "no": 1203
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/3/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
           
//         },
//         "body": {
         
//         },
//         "outputParameters": {
//           "name":"edo",
//            "departmentId":"edo",
//            "description":"data orchestraion tool"
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "sample",
//         "Api_Name": "department",
//         "no": 1203
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/4/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
           
//         },
//         "body": {
         
//         },
//         "outputParameters": {
//           "employeeId":"kiran",
//            "salary":"123"
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "sample",
//         "Api_Name": "salary",
//         "no": 1203
//     }
// ]

// });
// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/5/instances/list").reply(200, {
//   entities: [
//     {
//         "PathParameters": {
           
//         },
//         "body": {
         
//         },
//         "outputParameters": {
//           "employeeId":"kiran",
//            "expenditure":"123"
//         },
//         "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
//         "integrationName": "sample",
//         "Api_Name": "cost",
//         "no": 1203
//     }
// ]

// });
// mock.onPost('/users').reply(201, {
//   message: 'Fake user created successfully',
// });

// export default axioos;












import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Create an instance of Axios
const axioos = axios.create();

// Create a new instance of MockAdapter
const mock = new MockAdapter(axioos, { delayResponse: 300 });

// Mock GET request to /users
mock.onGet('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd4db0dcad815a07fd071/instances/list').reply(200, {
  entities: 
    [
      {
          "Username": "Test1",
          "ProfileDetails": {
              "ProfileImageUrl": "Test1",
              "Gender": "Test1",
              "DateOfBirth": "Test1"
          },
          "SubscriptionEndDate": "Test1",
          "PasswordHash": "Test1",
          "Address": {
              "StateProvince": "Test1",
              "IsPrimary": "Test1",
              "City": "Test1",
              "AddressType": "Test1",
              "PostalCode": "Test1",
              "Country": "Test1",
              "Street": "Test1"
          },
          "SubscriptionType": "Test1",
          "DateRegistered": "Test1",
          "User_Schema_Id": "Test1",
          "PlatformSchemas": [
              {
                  "integrations": [
                     
                  ],
                  "platform_description": "",
                  "platform_doc_url": "https://cloud.google.com/bigquery/docs/reference/rest",
                  "platform_git_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/",
                  "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654//8fbb7a03-9569-419d-a570-9261c1bb26f1_$$google_bigquery_logo_icon_168150.png",
                  "platform_name": "Sentinal Hub Api",
                  "platform_tags": [],
                  "platform_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/"
              },
             
          ],
          "UserId": "TestUser1",
          "LastLogin": "Test1",
          "AccountStatus": "Test1",
          "SubscriptionStartDate": "Test1",
          "Email": "Test1",
          "id": "TestUser1"
      }
    
  ]
  ,
});




mock.onGet('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instances/list').reply(200, {
  entities: [
    {
        "Integration_Name": "sample",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "2","3","4","5"
        ],
        "workflowIds": [],
        "id": "sample"
    },
    {
        "Integration_Name": "Snowflake_Pipeline",
        "Integration_Description": "Snowflake_Pipeline",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65fd1b231574a22f5d1a0p4c"
        ],
        "workflowIds": [],
        "id": "Snowflake_Pipeline"
    },
    {
        "Integration_Name": "Okta_Pipeline",
        "Integration_Description": "Okta_Pipeline",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d2f6c11b707d34e93754c1"
        ],
        "workflowIds": [],
        "id": "Okta_Pipeline"
    },
    {
        "Integration_Name": "BigQuery_Pipeline",
        "Integration_Description": "BigQuery_Pipeline",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65f8101dec18e4223f021f26"
        ],
        "workflowIds": [],
        "id": "BigQuery_Pipeline"
    },
    {
        "Integration_Name": "Azure Cost Analysis",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d3369f1b707d34e9375580"
        ],
        "workflowIds": [],
        "id": "Azure Cost Analysis"
    },
    {
        "Integration_Name": "AzureCostAnalysis",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d3369f1b707d34e9375580",
            "65f14bfc5f353406a916b8dc",
            "660a5f4c1574a22f5d1a1f1d"
        ],
        "workflowIds": [],
        "id": "AzureCostAnalysis"
    },
    {
        "Integration_Name": "Organization Usage",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65fd1b231574a22f5d1a0d5c"
        ],
        "workflowIds": [],
        "id": "Organization Usage"
    },
    {
        "Integration_Name": "ApplicationOperations",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d2f9a61b707d34e93754cf"
        ],
        "workflowIds": [],
        "id": "ApplicationOperations"
    },
    {
        "Integration_Name": "ApplicationUsers",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d302ef1b707d34e9375517"
        ],
        "workflowIds": [],
        "id": "ApplicationUsers"
    },
    {
        "Integration_Name": "ApplicationOperations",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d2f9a61b707d34e93754cf"
        ],
        "workflowIds": [],
        "id": "ApplicationOperations"
    },
    {
        "Integration_Name": "SystemLogs",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d2f6c11b707d34e93754c1"
        ],
        "workflowIds": [],
        "id": "SystemLogs"
    },
    {
        "Integration_Name": "Cost Analysis",
        "Integration_Description": "",
        "API_reference": "https://monitoring.googleapis.com",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "660b9ed468ba6066b351fa84",
            "660b9f9e68ba6066b351fa85",
            "660ba09468ba6066b351fa86"
           
        ],
        "workflowIds": [],
        "id": "Cost Analysis"
    },
    {
        "Integration_Name": "Data Sharing Usage",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65dc619b1b707d34e937b8be"
        ],
        "workflowIds": [],
        "id": "Data Sharing Usage"
    },
    {
        "Integration_Name": "Account Usage",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65fd1a121574a22f5d1a0d4f"
        ],
        "workflowIds": [],
        "id": "Account Usage"
    },
    {
        "Integration_Name": "LogActivities",
        "Integration_Description": "Help to retrive the systemlogs",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65d2f6c11b707d34e93754c1",
            "65d2f9a61b707d34e93754cf",
            "65d302ef1b707d34e9375517"
        ],
        "workflowIds": [],
        "id": "LogActivities"
    },
    {
        "Integration_Name": "OpenAI Usage",
        "Integration_Description": "Helps retrieve OpenAI Usage",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "660c1f1022f94a0e93b3de0f",
            "65d31b2d1b707d34e937552e"
        ],
        "workflowIds": [],
        "id": "OpenAI Usage"
    },
    {
        "Integration_Name": "",
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "username",
        "username": "",
        "password": "",
        "apikey": "",
        "schemaIds": [],
        "workflowIds": [],
        "id": ""
    },
    {
        "Integration_Name": "StrorageAccount",
        "schemaIds": [
            "65cdab711b707d34e93752c4",
            "65cc8e5d1b707d34e93751b3",
            "660a96c61574a22f5d1a205f"
        ],
        "workflowIds": [],
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "id": "StrorageAccount"
    },
    {
        "Integration_Name": "VirtualMachine",
        "schemaIds": [
            "65cc6c6f1b707d34e937518e"
        ],
        "workflowIds": [],
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "id": "VirtualMachine"
    },
    {
        "Integration_Name": "CloudStorage",
        "Integration_Description": "",
        "API_reference": "https://storage.googleapis.com",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "schemaIds": [
            "65ccb2ea1b707d34e93751ef",
            "65fbf7b71574a22f5d1a0a82",
            "65f81d64b9ae611185f27eeb",
            "660abb1605c9541234bceb02",
            "660b9d5068ba6066b351fa83",
            "660ab21605c9541234bceb00"
        ],
        "workflowIds": [],
        "id": "CloudStorage"
    },
    {
        "Integration_Name": "BigQueryData",
        "schemaIds": [
            "65f7ec7f5d1ff73e68ddad50",
            "65fd17781574a22f5d1a0d43",
            "65f8101dec18e4223f021f26"
        ],
        "workflowIds": [],
        "Integration_Description": "",
        "API_reference": "https://bigquery.googleapis.com/",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "apikey",
        "apikey": "Bearer ya29.c.c0AY_VpZjS5X-PsvDYGn3X5IGiTPk0dueAS9ovZCcMJ-PGSV8YQXKR-2rMAe9hm2RcgmdlHk3Jw3nSQ-tetszryGG49zfQ61iMmxXQm0jR2r6M1lAzHP49hhE3STACP11pAbeJfXp7eaCMyMa2AuDg2pznwKG3rI31Letvr7LRAa_2ql8d8vBn4VBvmVDQJJSW1_e-Sv44ysj7vs1lnNdbqhPQx31yjZCtZxcVnXv_AeOd_RDZYt2jECt3LhN44eOB0ppdo-qZsXrj0wZ8reNX8GFFAKIloQuWG5hDMQGO_Yo4H1banT702TJwEivHbqrB94iw7KNS2uggd4V6fDPz6NJovohj6xA8NmsUJvwKVodyisCEaGobitkE384De0i81VVpsghZvuwfOFMmZ6VrZFqFbJtwI8dOkR03i3-fRsM6moUfwlxBfJ52RugvYIn030tk6JRF--l6ntuO7hyj7YXb-j2acZtpJhobt88k3b6xrd3sQ5WO-vXgUJlXgbRYy_k0Wh2XdWrj418-IhZMc2mXd5anv1guIOSfz7azQBpnrOiBvMbc73g4oBMJcmWpV7ZvYkj0sYazamvIjIcMd3UbJcUbi8VIVmrJm-lpIrQWvyxm2es_17mfVBY1MkrsSlqrBukU0JBBti-vVs51o_e8Qmw7S-iu7Mct57qWk2jpelvjo9VW8tgmckgVhmo18dWR8uMfdU2ux3pk9RZu8B87zkthO_fI9Xz6ftYnVSuuv7JhUhIXo6xop_I7OXvpjctVXneccf83Rns0iSq-pJfaxRhXJIQ2gbvQ7oyI6JweWt0p7SwVgOwc1xRpvFpvecZmlQsRyqQ2Jz_x8qbWZ88QemXyusrjJRdjzbWtwtI6BQ9aVta1yjtSdscBB8af7O7lvRwohiMWgw-BOlfdJ6IpbzceIW7t-uZv_fpkRj8QfckMbjVc0gZxtlXXRFZMJozq0hFJrIkbJVp0xjn267Xa4l01-d3lheyj6f_fpvmvIifgnY80sRU",
        "id": "BigQueryData"
    },
    {
        "Integration_Name": "Platform Methods",
        "schemaIds": [
            "655f271b53f7d870cf3903d0"
        ],
        "workflowIds": [],
        "Integration_Description": "",
        "API_reference": "",
        "Documentation": "",
        "Operational_Endpoint": "",
        "Credentials_type": "",
        "apikey": "",
        "id": "Platform Methods"
    },
    {
        "Integration_Name": "Azure Storage Integration",
        "Integration_Description": "Helps retrieve necessary data regarding Azure Storage Analysis",
        "API_reference": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id",
        "Documentation": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-blobs?tabs=microsoft-entra-id",
        "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/storageservices/list-containers2?tabs=microsoft-entra-id",
        "Credentials_type": "apikey",
        "apikey": "",
        "schemaIds": [
            "65a7b3681e40c81a6bc9d2a0",
            "65842331f3766b7212fe6a51",
            "65841e0ef3766b7212fe6a0f"
        ],
        "workflowIds": [],
        "id": "Azure Storage Integration"
    },
    {
        "Integration_Name": "OpenAI Licenses",
        "Integration_Description": "Helps retrieve OpenAI Users",
        "API_reference": "https://platform.openai.com/docs/api-reference/models",
        "Documentation": "https://platform.openai.com/docs/api-reference/models",
        "Operational_Endpoint": "https://platform.openai.com/docs/api-reference/models",
        "Credentials_type": "apikey",
        "apikey": "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",
        "schemaIds": [
            "65a7acfa1e40c81a6bc9d259",
            "65a7adbb1e40c81a6bc9d25c"
        ],
        "workflowIds": [],
        "id": "OpenAI Licenses"
    },
    {
        "Integration_Name": "ComputeVirtualMachines",
        "Integration_Description": "Retrieves information about the model view or the instance view of a virtual machine",
        "API_reference": "https://learn.microsoft.com/en-us/rest/api/compute/virtual-machines/list-all?view=rest-compute-2023-09-01&tabs=HTTP",
        "Documentation": "https://learn.microsoft.com/en-us/rest/api/compute/virtual-machines/list-all?view=rest-compute-2023-09-01&tabs=HTTP",
        "Operational_Endpoint": " https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines?api-version=2023-09-01&statusOnly={statusOnly}&$filter={$filter}&$expand=instanceView",
        "Credentials_type": "apikey",
        "apikey": "",
        "schemaIds": [
            "65a7b9291e40c81a6bc9d2bf",
            "65a7ba181e40c81a6bc9d2c1",
            "65a7baa51e40c81a6bc9d2c5"
        ],
        "workflowIds": [],
        "id": "ComputeVirtualMachines"
    },
    {
        "Integration_Name": "OpenAI Models",
        "Integration_Description": "Helps retrieve OpenAI models",
        "API_reference": "https://platform.openai.com/docs/api-reference/models",
        "Documentation": "https://platform.openai.com/docs/api-reference/models",
        "Operational_Endpoint": "https://platform.openai.com/docs/api-reference/models",
        "Credentials_type": "apikey",
        "apikey": "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",
        "schemaIds": [
            "65a76ca31e40c81a6bc9d1b0",
            "65a76d0c1e40c81a6bc9d1b1",
            "65a76d551e40c81a6bc9d1b2"
        ],
        "workflowIds": [],
        "id": "OpenAI Models"
    },
    {
        "Integration_Name": "Azure Cost Integration",
        "Integration_Description": "Helps retrieve necessary data regarding Azure Cost Analysis",
        "API_reference": "https://learn.microsoft.com/en-us/rest/api/consumption/",
        "Documentation": "https://learn.microsoft.com/en-us/rest/api/consumption/",
        "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/consumption/",
        "Credentials_type": "apikey",
        "apikey": "",
        "schemaIds": [
            "65a7b5c91e40c81a6bc9d2ac",
            "65a7b6f81e40c81a6bc9d2b8"
        ],
        "workflowIds": [],
        "id": "Azure Cost Integration"
    },
    {
        "Integration_Name": "Azure Logs Integration",
        "Integration_Description": "Helps retrieve necessary data regarding Azure Logs Analytics",
        "API_reference": "https://learn.microsoft.com/en-us/rest/api/logz/?view=rest-loganalytics-2022-10-27-preview",
        "Documentation": "https://learn.microsoft.com/en-us/rest/api/logz/?view=rest-loganalytics-2022-10-27-preview",
        "Operational_Endpoint": "https://learn.microsoft.com/en-us/rest/api/loganalytics/query/get?view=rest-loganalytics-2022-10-27-preview&tabs=HTTP",
        "Credentials_type": "apikey",
        "apikey": "",
        "schemaIds": [
            "65a7b86a1e40c81a6bc9d2bd"
        ],
        "workflowIds": [],
        "id": "Azure Logs Integration"
    },
    {
        "Integration_Name": "Storage Analysis",
        "Integration_Description": "Helps retrieve necessary data regarding BigQuery storage utilization",
        "API_reference": "https://cloud.google.com/bigquery/docs/reference/rest",
        "Documentation": "https://cloud.google.com/bigquery/docs/reference/rest",
        "Operational_Endpoint": "https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets/list",
        "Credentials_type": "apikey",
        "apikey": "O7MxbMHmP2fHqge",
        "schemaIds": [
            "655ed5aa7c8ba57caa377dd3",
            "655eeb6ed475d34964c35d48",
            "655f020059570d3e165fdbe9",
            "65673c6219b2493ebae30029"
        ],
        "workflowIds": [],
        "id": "Storage Analysis"
    },
    {
        "Integration_Name": "OKTA Apps",
        "Integration_Description": "Manage applications and/or assignments to users or groups for your organization",
        "API_reference": "https://developer.okta.com/docs/reference/api/apps/",
        "Documentation": "https://developer.okta.com/docs/reference/api/apps/",
        "Operational_Endpoint": "https://developer.okta.com/docs/reference/api/apps/#add-application:~:text=Add%20application-,POST,/api/v1/apps,-Adds%20a%20new",
        "Credentials_type": "apikey",
        "apikey": "p8uersF0RPC22aJ",
        "schemaIds": [
            "655f271b53f7d870cf3903d0",
            "655f286659570d3e16625690",
            "655f29cc3ca51327c2399986"
        ],
        "workflowIds": [],
        "id": "OKTA Apps"
    },
    {
        "Integration_Name": "Platform Queries",
        "Integration_Description": "Allows platform queries including SQL statements for execution",
        "API_reference": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "Documentation": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "Operational_Endpoint": "https://account_locator.snowflakecomputing.com/api/v2/statements",
        "Credentials_type": "apikey",
        "apikey": "4D2h1rmeqiqIVFn",
        "schemaIds": [
            "65673b7419b2493ebae3001b"
        ],
        "workflowIds": [],
        "id": "Platform Queries"
    }
],
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cde8291b707d34e93752d7/instances/list").reply(200, {
  entities: [
    {
        "PlatformSchemas": [
            {
                "integrations": [
                    "BigQueryData",
                    "CloudStorage",
                    "Cost Analysis",
                    "BigQuery_Pipeline"
                ],
                "platform_description": "BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale.",
                "platform_doc_url": "https://cloud.google.com/bigquery/docs/reference/rest",
                "platform_git_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/",
                "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654//8fbb7a03-9569-419d-a570-9261c1bb26f1_$$google_bigquery_logo_icon_168150.png",
                "platform_name": "BigQuery",
                "platform_tags": [],
                "platform_url": "https://github.com/GoogleCloudPlatform/bigquery-utils/"
            },
            {
                "integrations": [
                    "SystemLogs",
                    "ApplicationOperations",
                    "ApplicationUsers",
                    "Okta_Pipeline"
                ],
                "platform_description": "Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we’ve got you covered.",
                "platform_doc_url": "https://developer.okta.com/docs/reference/",
                "platform_git_url": "https://github.com/okta/okta-sdk-java",
                "platform_icon_url": "https://cdn.aidtaas.com//321ff654/designer/321t654/116e802e-dedd-4522-ba96-1c420f6428af_$$okta_logo.png",
                "platform_name": "OKTA",
                "platform_tags": [],
                "platform_url": "https://www.okta.com/"
            },
            {
                "integrations": [
                    "Account Usage",
                    "Data Sharing Usage",
                    "Organization Usage",
                    "Snowflake_Pipeline"
                ],
                "platform_description": "Snowflake isn’t just a great technology company. We’re all about the data—easily enabling governed access to near-infinite amounts of data, and cutting-edge tools, applications, and services. With the Data Cloud, you can collaborate locally and globally to reveal new insights, create previously unforeseen business opportunities, and identify and know your customers in the moment with seamless and relevant experiences.",
                "platform_doc_url": "https://docs.snowflake.com/en/developer-guide/sql-api/index",
                "platform_git_url": "",
                "platform_icon_url": "https://cdn.aidtaas.com/321ff654/designer/321t654/19aa38ec-cb60-44a8-8bc6-a0ea3fa356c7_$$SNOW.png",
                "platform_name": "Snowflake",
                "platform_tags": [],
                "platform_url": "https://www.snowflake.com/en/"
            },
            {
                "integrations": [
                    "VirtualMachine",
                    "StrorageAccount",
                    "AzureCostAnalysis"
                ],
                "platform_description": "Build, manage, and monitor all your apps in Microsoft Azure Portal. A single, unified hub built for you, your team, and your projects.",
                "platform_doc_url": "https://learn.microsoft.com/en-us/azure/azure-portal/",
                "platform_git_url": "",
                "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/33add040-2d18-4937-84b6-0569e7aadff3",
                "platform_name": "Azure ",
                "platform_tags": [],
                "platform_url": "https://azure.microsoft.com/en/"
            },
            {
                "integrations": [
                    "OpenAI Usage"
                ],
                "platform_description": "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
                "platform_doc_url": "https://platform.openai.com/docs/api-reference/introduction",
                "platform_git_url": "",
                "platform_icon_url": "http://ig.aidtaas.com/content-service/v1.0/content/3e81b8f3-6d94-4ab9-8d1b-21812e24953e",
                "platform_name": "OpenAI",
                "platform_tags": [],
                "platform_url": "https://openai.com/"
            }
        ],
        "id": "id"
    }
],
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instances/list").reply(200, {
  entities: [
    
],
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9500828ebd37244d9d489/instances/list").reply(200, {
  entities: [
    {
           "UserId": "TestUser1",
           "Username": "Test1",
           
           "apilist": [
            
          
            {
                "id": "department",
                "name": "department",
                "children": [
                    {
                        "id": "employee",
                        "name": "employee",
                        "children": [
                            {
                                "id": "cost",
                                "name": "cost",
                                "children": [],
                                "selectedOutputParams": [],
                                "selectedWorkflows": [],
                                "description": "API description not found",
                                "selected": false,
                                "inputParams": {},
                                "outputParams": [
                                    "expenditure",
                                    "employeeId",
                                    
                                ],
                                "PathParams": {},
                                "body": {},
                                "Integration_Name": "sample",
                                "schemaID": "",
                                "selectedInputParams": {},
                                "selectedPathParams": {},
                                "selectedBody": {},
                                "outPutResponse": "4",
                                "outputParamsTag": {},
                                "indexes": {}
                            },
                            {
                                "id": "salary",
                                "name": "salary",
                                "children": [],
                                "selectedOutputParams": [],
                                "selectedWorkflows": [],
                                "description": "API description not found",
                                "selected": false,
                                "inputParams": {},
                                "outputParams": [
                                    "salary",
                                    "employeeId",
                                    
                                ],
                                "PathParams": {},
                                "body": {},
                                "Integration_Name": "sample",
                                "schemaID": "",
                                "selectedInputParams": {},
                                "selectedPathParams": {},
                                "selectedBody": {},
                                "outPutResponse": "4",
                                "outputParamsTag": {},
                                "indexes": {}
                            }
                            
                        ],
                        "selectedOutputParams": [],
                        "selectedWorkflows": [],
                        "description": "API description not found",
                        "selected": false,
                        "inputParams": {},
                        "outputParams": [
                            "name",
                            "employeeId",
                            "departmentId",
                            "joinDate",
                            "designation"
                        ],
                        "PathParams": {},
                        "body": {},
                        "Integration_Name": "sample",
                        "schemaID": "",
                        "selectedInputParams": {},
                        "selectedPathParams": {},
                        "selectedBody": {},
                        "outPutResponse": "2",
                        "outputParamsTag": {},
                        "indexes": {}
                    }
                ],
                "selectedOutputParams": [],
                "selectedWorkflows": [],
                "description": "API description not found",
                "selected": false,
                "inputParams": {},
                "outputParams": [
                    "name",
                    "departmentId",
                    "description"
                ],
                "PathParams": {},
                "body": {},
                "Integration_Name": "sample",
                "schemaID": "",
                "selectedInputParams": {},
                "selectedPathParams": {},
                "selectedBody": {},
                "outPutResponse": "3",
                "outputParamsTag": {},
                "indexes": {}
            },
               {
                   "id": "VirtualMachineData",
                   "name": "VirtualMachineData",
                   "children": [],
                   "selectedOutputParams": [
                       "cost"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "timespan": "string",
                       "interval": "string",
                       "metricnames": "string",
                       "aggregation": "string",
                       "api_version": "string"
                   },
                   "outputParams": [
                       "cost",
                       "timespan",
                       "interval",
                       "value",
                       "namespace",
                       "resourceregion"
                   ],
                   "PathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "body": {},
                   "Integration_Name": "VirtualMachine",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "SystemLogs",
                   "name": "SystemLogs",
                   "children": [],
                   "selectedOutputParams": [
                       "actor"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "since": "",
                       "q": ""
                   },
                   "outputParams": [
                       "actor",
                       "client",
                       "device",
                       "authenticationContext",
                       "displayMessage",
                       "eventType",
                       "outcome",
                       "published",
                       "securityContext",
                       "severity",
                       "debugContext",
                       "legacyEventType",
                       "transaction",
                       "uuid",
                       "version",
                       "request",
                       "target"
                   ],
                   "PathParams": {
                       "domain": "dev-69282603-admin.okta.com"
                   },
                   "body": {},
                   "Integration_Name": "SystemLogs",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "domain": "dev-69282603-admin.okta.com"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               }, {
                "id": "SystemLogs",
                "name": "SystemLogs",
                "children": [],
                "selectedOutputParams": [
                    "actor"
                ],
                "selectedWorkflows": [
                    "purge workflow"
                ],
                "description": "API description not found",
                "selected": true,
                "inputParams": {
                    "since": "",
                    "q": ""
                },
                "outputParams": [
                    "actor",
                    "client",
                    "device",
                    "authenticationContext",
                    "displayMessage",
                    "eventType",
                    "outcome",
                    "published",
                    "securityContext",
                    "severity",
                    "debugContext",
                    "legacyEventType",
                    "transaction",
                    "uuid",
                    "version",
                    "request",
                    "target"
                ],
                "PathParams": {
                    "domain": "dev-69282603-admin.okta.com"
                },
                "body": {},
                "Integration_Name": "Okta_Pipeline",
                "schemaID": "",
                "selectedInputParams": {},
                "selectedPathParams": {
                    "domain": "dev-69282603-admin.okta.com"
                },
                "selectedBody": {},
                "outPutResponse": ""
            },
               {
                   "id": "FilteredLogs",
                   "name": "FilteredLogs",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "actor",
                       "client",
                       "device",
                       "authenticationContext",
                       "displayMessage",
                       "eventType",
                       "outcome",
                       "published",
                       "securityContext",
                       "severity",
                       "debugContext",
                       "legacyEventType",
                       "transaction",
                       "uuid",
                       "version",
                       "request",
                       "target"
                   ],
                   "PathParams": {
                       "since": "2024-03-04",
                       "q": "Saikiran%20Gadupathi"
                   },
                   "body": {},
                   "Integration_Name": "SystemLogs",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "since": "2024-03-04",
                       "q": "Saikiran%20Gadupathi"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "Application_Users",
                   "name": "Application_Users",
                   "children": [],
                   "selectedOutputParams": [
                       "0"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "0"
                   ],
                   "PathParams": {
                       "app_id": "0oaf8annb5fGMKk9A5d7",
                       "domain": "dev-69282603-admin.okta.com"
                   },
                   "body": {},
                   "Integration_Name": "ApplicationUsers",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "app_id": "0oaf8annb5fGMKk9A5d7"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "ApplicationOperations",
                   "name": "ApplicationOperations",
                   "children": [],
                   "selectedOutputParams": [
                       "id",
                       "status"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "id",
                       "name",
                       "label",
                       "status",
                       "lastUpdated",
                       "created",
                       "accessibility",
                       "visibility",
                       "features",
                       "signOnMode",
                       "credentials",
                       "settings",
                       "_links"
                   ],
                   "PathParams": {
                       "domain": "dev-69282603-admin.okta.com"
                   },
                   "body": {},
                   "Integration_Name": "ApplicationOperations",
                   "schemaID": "",
                   "selectedInputParams": {
                       "q": "saikiran"
                   },
                   "selectedPathParams": {
                       "domain": "dev-69282603-admin.okta.com"
                   },
                   "selectedBody": {},
                   "outPutResponse": "65d2f9a61b707d34e93754cf",
                   "outputParamsTag": {
                       "id": "Mobius_PI_id",
                       "status": "Mobius_PI_total_cost"
                   }
               },
               {
                   "id": "Snowflake DATA SHARING USAGE",
                   "name": "Snowflake DATA SHARING USAGE",
                   "children": [],
                   "selectedOutputParams": [
                       "requestId",
                       "createdOn"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "resultSetMetaData",
                       "data",
                       "code",
                       "statementStatusUrl",
                       "requestId",
                       "sqlState",
                       "statementHandle",
                       "message",
                       "createdOn"
                   ],
                   "PathParams": {
                       "domain": ""
                   },
                   "body": {
                       "statement": [
                           {
                               "name": "APPLICATION_STATE",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE"
                           },
                           {
                               "name": "LISTING_ACCESS_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_ACCESS_HISTORY"
                           },
                           {
                               "name": "LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY"
                           },
                           {
                               "name": "LISTING_AUTO_FULFILLMENT_REFRESH_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_REFRESH_DAILY"
                           },
                           {
                               "name": "LISTING_CONSUMPTION_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_CONSUMPTION_DAILY"
                           },
                           {
                               "name": "LISTING_EVENTS_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_EVENTS_DAILY"
                           },
                           {
                               "name": "MARKETPLACE_DISBURSEMENT_REPORT",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
                           },
                           {
                               "name": "MARKETPLACE_PAID_USAGE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
                           },
                           {
                               "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
                           },
                           {
                               "name": "MONETIZED_USAGE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MONETIZED_USAGE_DAILY"
                           }
                       ],
                       "timeout": "1000",
                       "database": "GAIAN1",
                       "schema": "TABLE1",
                       "warehouse": "FIRST_WAREHOUSE",
                       "role": "ACCOUNTADMIN"
                   },
                   "Integration_Name": "Data Sharing Usage",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "domain": "axoiihb-of84409"
                   },
                   "selectedBody": {
                       "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
                       "timeout": "1000",
                       "database": "GAIAN1",
                       "schema": "TABLE1",
                       "warehouse": "FIRST_WAREHOUSE",
                       "role": "ACCOUNTADMIN"
                   },
                   "outPutResponse": "",
                   "outputParamsTag": {
                       "resultSetMetaData": "Mobius_PI_rolling_avg_usage",
                       "data": "Mobius_PI_avg_cost_per_usage",
                       "code": "Mobius_PI_api_call_volume",
                       "requestId": "Mobius_PI_id",
                       "createdOn": "Mobius_PI_time"
                   },
                   "indexes": {
                       "resultSetMetaData": "none",
                       "data": "primary",
                       "code": "secondary",
                       "requestId": "primary",
                       "createdOn": "primary"
                   }
               },
               {
                   "id": "Snowflake_Account_Usage",
                   "name": "Snowflake_Account_Usage",
                   "children": [],
                   "selectedOutputParams": [
                       "USAGE_DATE",
                       "STORAGE_BYTES"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "USAGE_DATE",
                       "STORAGE_BYTES",
                       "STAGE_BYTES",
                       "FAILSAFE_BYTES",
                       "HYBRID_TABLE_STORAGE_BYTES"
                   ],
                   "PathParams": {
                       "domain": ""
                   },
                   "body": {
                       "statement": [
                           {
                               "name": "ACCESS_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY"
                           },
                           {
                               "name": "AGGREGATE_QUERY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATE_QUERY_HISTORY"
                           },
                           {
                               "name": "AGGREGATION_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATION_POLICIES"
                           },
                           {
                               "name": "ALERT_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ALERT_HISTORY"
                           },
                           {
                               "name": "AUTOMATIC_CLUSTERING_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
                           },
                           {
                               "name": "CLASSES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASSES"
                           },
                           {
                               "name": "CLASS_INSTANCES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASS_INSTANCES"
                           },
                           {
                               "name": "COLUMNS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COLUMNS"
                           },
                           {
                               "name": "COMPLETE_TASK_GRAPHS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COMPLETE_TASK_GRAPHS"
                           },
                           {
                               "name": "COPY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY"
                           },
                           {
                               "name": "DATABASES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASES"
                           },
                           {
                               "name": "DATABASE_REPLICATION_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_REPLICATION_USAGE_HISTORY"
                           },
                           {
                               "name": "DATABASE_STORAGE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
                           },
                           {
                               "name": "DATA_CLASSIFICATION_LATEST",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST"
                           },
                           {
                               "name": "DATA_QUALITY_MONITORING_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_QUALITY_MONITORING_USAGE_HISTORY"
                           },
                           {
                               "name": "DATA_TRANSFER_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_TRANSFER_HISTORY"
                           },
                           {
                               "name": "ELEMENT_TYPES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ELEMENT_TYPES"
                           },
                           {
                               "name": "EVENT_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EVENT_USAGE_HISTORY"
                           },
                           {
                               "name": "EXTERNAL_ACCESS_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EXTERNAL_ACCESS_HISTORY"
                           },
                           {
                               "name": "FIELDS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FIELDS"
                           },
                           {
                               "name": "FILE_FORMATS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FILE_FORMATS"
                           },
                           {
                               "name": "GRANTS_TO_ROLES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_ROLES"
                           },
                           {
                               "name": "GRANTS_TO_USERS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_USERS"
                           },
                           {
                               "name": "HYBRID_TABLE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.HYBRID_TABLE_USAGE_HISTORY"
                           },
                           {
                               "name": "LOAD_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOAD_HISTORY"
                           },
                           {
                               "name": "LOCK_WAIT_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOCK_WAIT_HISTORY"
                           },
                           {
                               "name": "LOGIN_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY"
                           },
                           {
                               "name": "MASKING_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MASKING_POLICIES"
                           },
                           {
                               "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
                           },
                           {
                               "name": "METERING_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_DAILY_HISTORY"
                           },
                           {
                               "name": "METERING_HISTORY                ",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_HISTORY"
                           },
                           {
                               "name": "NETWORK_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_POLICIES"
                           },
                           {
                               "name": "NETWORK_RULES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULES"
                           },
                           {
                               "name": "NETWORK_RULE_REFERENCES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULE_REFERENCES"
                           },
                           {
                               "name": "OBJECT_DEPENDENCIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.OBJECT_DEPENDENCIES"
                           },
                           {
                               "name": "PASSWORD_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PASSWORD_POLICIES"
                           },
                           {
                               "name": "PIPES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPES"
                           },
                           {
                               "name": "PIPE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPE_USAGE_HISTORY"
                           },
                           {
                               "name": "POLICY_REFERENCES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.POLICY_REFERENCES"
                           },
                           {
                               "name": "PROCEDURES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROCEDURES"
                           },
                           {
                               "name": "PROJECTION_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROJECTION_POLICIES"
                           },
                           {
                               "name": "QUERY_ACCELERATION_ELIGIBLE",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_ACCELERATION_ELIGIBLE"
                           },
                           {
                               "name": "QUERY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY"
                           },
                           {
                               "name": "REFERENTIAL_CONSTRAINTS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REFERENTIAL_CONSTRAINTS"
                           },
                           {
                               "name": "REPLICATION_GROUP_REFRESH_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
                           },
                           {
                               "name": "REPLICATION_GROUP_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
                           },
                           {
                               "name": "REPLICATION_GROUP_REFRESH_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
                           },
                           {
                               "name": "REPLICATION_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_USAGE_HISTORY"
                           },
                           {
                               "name": "ROLES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROLES"
                           },
                           {
                               "name": "ROW_ACCESS_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROW_ACCESS_POLICIES"
                           },
                           {
                               "name": "SCHEMATA",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SCHEMATA"
                           },
                           {
                               "name": "SEARCH_OPTIMIZATION_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SEARCH_OPTIMIZATION_HISTORY"
                           },
                           {
                               "name": "SERVICES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SERVICES"
                           },
                           {
                               "name": "SESSIONS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSIONS"
                           },
                           {
                               "name": "SESSION_POLICIES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSION_POLICIES"
                           },
                           {
                               "name": "SNOWPARK_CONTAINER_SERVICES_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPARK_CONTAINER_SERVICES_HISTORY"
                           },
                           {
                               "name": "SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY"
                           },
                           {
                               "name": "SNOWPIPE_STREAMING_CLIENT_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_CLIENT_HISTORY"
                           },
                           {
                               "name": "STAGES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STAGES"
                           },
                           {
                               "name": "STORAGE_USAGE",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
                           },
                           {
                               "name": "TABLES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLES"
                           },
                           {
                               "name": "TABLE_CONSTRAINTS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_CONSTRAINTS"
                           },
                           {
                               "name": "TABLE_STORAGE_METRICS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS"
                           },
                           {
                               "name": "TAGS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAGS"
                           },
                           {
                               "name": "TAG_REFERENCES",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES"
                           },
                           {
                               "name": "TASK_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY"
                           },
                           {
                               "name": "TASK_VERSIONS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_VERSIONS"
                           },
                           {
                               "name": "USERS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.USERS"
                           },
                           {
                               "name": "VIEWS",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.VIEWS"
                           },
                           {
                               "name": "WAREHOUSE_EVENTS_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_EVENTS_HISTORY"
                           },
                           {
                               "name": "WAREHOUSE_LOAD_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_LOAD_HISTORY"
                           },
                           {
                               "name": "WAREHOUSE_METERING_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY"
                           }
                       ]
                   },
                   "Integration_Name": "Account Usage",
                   "schemaID": "660660c81574a22f5d1a1a74",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "domain": "axoiihb-of84409"
                   },
                   "selectedBody": {
                       "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
                   },
                   "outPutResponse": "66065b931574a22f5d1a1a0e",
                   "outputParamsTag": {
                       "USAGE_DATE": "Mobius_PI_date",
                       "STORAGE_BYTES": "Mobius_PI_total_usage"
                   },
                   "indexes": {
                       "USAGE_DATE": "primary",
                       "STORAGE_BYTES": "primary"
                   }
               },
               {
                   "id": "Snowflake_Organization_Usage",
                   "name": "Snowflake_Organization_Usage",
                   "children": [],
                   "selectedOutputParams": [
                       "USAGE_DATE",
                       "USAGE_TYPE"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "ORGANIZATION_NAME",
                       "CONTRACT_NUMBER",
                       "ACCOUNT_NAME",
                       "ACCOUNT_LOCATOR",
                       "REGION",
                       "SERVICE_LEVEL",
                       "USAGE_DATE",
                       "USAGE_TYPE",
                       "USAGE",
                       "CURRENCY",
                       "USAGE_IN_CURRENCY",
                       "BALANCE_SOURCE",
                       "BILLING_TYPE",
                       "RATING_TYPE",
                       "SERVICE_TYPE",
                       "IS_ADJUSTMENT"
                   ],
                   "PathParams": {
                       "domain": ""
                   },
                   "body": {
                       "statement": [
                           {
                               "name": "ACCOUNTS",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
                           },
                           {
                               "name": "AUTOMATIC_CLUSTERING_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
                           },
                           {
                               "name": "CONTRACT_ITEMS",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.CONTRACT_ITEMS"
                           },
                           {
                               "name": "DATABASE_STORAGE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
                           },
                           {
                               "name": "DATA_TRANSFER_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
                           },
                           {
                               "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
                           },
                           {
                               "name": "MARKETPLACE_DISBURSEMENT_REPORT",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
                           },
                           {
                               "name": "MARKETPLACE_PAID_USAGE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
                           },
                           {
                               "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
                           },
                           {
                               "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
                           },
                           {
                               "name": "METERING_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.METERING_DAILY_HISTORY"
                           },
                           {
                               "name": "MONETIZED_USAGE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MONETIZED_USAGE_DAILY"
                           },
                           {
                               "name": "PIPE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PIPE_USAGE_HISTORY"
                           },
                           {
                               "name": "PREVIEW_CONTRACT_ITEMS",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_CONTRACT_ITEMS"
                           },
                           {
                               "name": "PREVIEW_DATA_TRANSFER_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_DATA_TRANSFER_DAILY_HISTORY"
                           },
                           {
                               "name": "PREVIEW_METERING_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_METERING_DAILY_HISTORY"
                           },
                           {
                               "name": "PREVIEW_RATE_SHEET_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
                           },
                           {
                               "name": "PREVIEW_REMAINING_BALANCE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
                           },
                           {
                               "name": "PREVIEW_STORAGE_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_STORAGE_DAILY_HISTORY"
                           },
                           {
                               "name": "PREVIEW_USAGE_IN_CURRENCY_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_USAGE_IN_CURRENCY_DAILY"
                           },
                           {
                               "name": "QUERY_ACCELERATION_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.QUERY_ACCELERATION_HISTORY"
                           },
                           {
                               "name": "RATE_SHEET_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
                           },
                           {
                               "name": "REMAINING_BALANCE_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
                           },
                           {
                               "name": "REPLICATION_GROUP_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
                           },
                           {
                               "name": "REPLICATION_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
                           },
                           {
                               "name": "SEARCH_OPTIMIZATION_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
                           },
                           {
                               "name": "STAGE_STORAGE_USAGE_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
                           },
                           {
                               "name": "STORAGE_DAILY_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STORAGE_DAILY_HISTORY"
                           },
                           {
                               "name": "USAGE_IN_CURRENCY_DAILY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
                           },
                           {
                               "name": "WAREHOUSE_METERING_HISTORY",
                               "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY"
                           }
                       ]
                   },
                   "Integration_Name": "Organization Usage",
                   "schemaID": "660692611574a22f5d1a1bf4",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "domain": "axoiihb-of84409"
                   },
                   "selectedBody": {
                       "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
                   },
                   "outPutResponse": "65fd1b231574a22f5d1a0d5c",
                   "outputParamsTag": {},
                   "indexes": {
                       "USAGE_DATE": "primary",
                       "USAGE_TYPE": "primary"
                   }
               },
               {
                "id": "Snowflake Organization Usage",
                "name": "Snowflake Organization Usage",
                "children": [],
                "selectedOutputParams": [
                    "USAGE_DATE",
                    "USAGE_TYPE"
                ],
                "selectedWorkflows": [
                    "purge workflow"
                ],
                "description": "API description not found",
                "selected": true,
                "inputParams": {},
                "outputParams": [
                    "ORGANIZATION_NAME",
                    "CONTRACT_NUMBER",
                    "ACCOUNT_NAME",
                    "ACCOUNT_LOCATOR",
                    "REGION",
                    "SERVICE_LEVEL",
                    "USAGE_DATE",
                    "USAGE_TYPE",
                    "USAGE",
                    "CURRENCY",
                    "USAGE_IN_CURRENCY",
                    "BALANCE_SOURCE",
                    "BILLING_TYPE",
                    "RATING_TYPE",
                    "SERVICE_TYPE",
                    "IS_ADJUSTMENT"
                ],
                "PathParams": {
                    "domain": ""
                },
                "body": {
                    "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
                },
                "Integration_Name": "Snowflake_Pipeline",
                "schemaID": "660692611574a22f5d1a1bf4",
                "selectedInputParams": {},
                "selectedPathParams": {
                    "domain": "axoiihb-of84409"
                },
                "selectedBody": {
                    "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
                },
                "outPutResponse": "65fd1b231574a22f5d1a0d5c",
                "outputParamsTag": {},
                "indexes": {
                    "USAGE_DATE": "primary",
                    "USAGE_TYPE": "primary"
                }
            },
               {
                   "id": "GetProjectStorageDetails",
                   "name": "GetProjectStorageDetails",
                   "children": [],
                   "selectedOutputParams": [
                       "creation_time",
                       "last_modified_time",
                       "catalog_name",
                       "schema_name",
                       "schema_owner"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "catalog_name",
                       "schema_name",
                       "schema_owner",
                       "creation_time",
                       "last_modified_time",
                       "location",
                       "ddl",
                       "default_collation_name"
                   ],
                   "PathParams": {
                       "projectId": "my-new-project-4-412310"
                   },
                   "body": {
                       "query": "SELECT * FROM `my-new-project-4-412310.INFORMATION_SCHEMA.SCHEMATA`",
                       "useLegacySql": false
                   },
                   "Integration_Name": "BigQueryData",
                   "schemaID": "6603ae591574a22f5d1a10f6",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "my-new-project-4-412310"
                   },
                   "selectedBody": {
                       "query": "SELECT * FROM `my-new-project-4-412310.INFORMATION_SCHEMA.SCHEMATA`",
                       "useLegacySql": "false"
                   },
                   "outPutResponse": "65fd17781574a22f5d1a0d43",
                   "outputParamsTag": {
                       "creation_time": "Mobius_PI_time",
                       "last_modified_time": "Mobius_PI_peak_hour"
                   },
                   "indexes": {
                       "creation_time": "primary",
                       "last_modified_time": "primary"
                   }
               },
               {
                   "id": "GetTablesList",
                   "name": "GetTablesList",
                   "children": [
                       {
                           "id": "GetDataSetDetails",
                           "name": "GetDataSetDetails",
                           "children": [],
                           "selectedOutputParams": [
                               "id",
                               "creationTime"
                           ],
                           "selectedWorkflows": [
                               "purge workflow"
                           ],
                           "description": "API description not found",
                           "selected": true,
                           "inputParams": {},
                           "outputParams": [
                               "kind",
                               "etag",
                               "id",
                               "selfLink",
                               "datasetReference",
                               "defaultTableExpirationMs",
                               "access",
                               "creationTime",
                               "lastModifiedTime",
                               "location",
                               "defaultPartitionExpirationMs",
                               "type",
                               "isCaseInsensitive",
                               "maxTimeTravelHours",
                               "storageBillingModel"
                           ],
                           "PathParams": {
                               "projectId": "my-new-project-4-412310",
                               "datasetId": "dataset4"
                           },
                           "body": {},
                           "Integration_Name": "BigQueryData",
                           "schemaID": "6603e7471574a22f5d1a11ee",
                           "selectedInputParams": {},
                           "selectedPathParams": {
                               "projectId": "my-new-project-4-412310",
                               "datasetId": "dataset4"
                           },
                           "selectedBody": {},
                           "outPutResponse": "65cc59061b707d34e9375158",
                           "outputParamsTag": {
                               "id": "Mobius_PI_id",
                               "creationTime": "Mobius_PI_total_cost"
                           },
                           "indexes": {
                               "id": "primary",
                               "creationTime": "primary"
                           }
                       }
                   ],
                   "selectedOutputParams": [
                       "kind",
                       "totalItems"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "kind",
                       "etag",
                       "tables",
                       "totalItems"
                   ],
                   "PathParams": {
                       "projectId": "my-new-project-4-412310",
                       "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
                   },
                   "body": {},
                   "Integration_Name": "BigQueryData",
                   "schemaID": "",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "my-new-project-4-412310",
                       "datasetId": "dataset4"
                   },
                   "selectedBody": {},
                   "outPutResponse": "65cb674c1b707d34e9375023",
                   "outputParamsTag": {},
                   "indexes": {
                       "kind": "primary",
                       "totalItems": "primary"
                   }
               },
               {
                "id": "GetTablesList",
                "name": "GetTablesList",
                "children": [
                    {
                        "id": "GetDataSetDetails",
                        "name": "GetDataSetDetails",
                        "children": [],
                        "selectedOutputParams": [
                            "id",
                            "creationTime"
                        ],
                        "selectedWorkflows": [
                            "purge workflow"
                        ],
                        "description": "API description not found",
                        "selected": true,
                        "inputParams": {},
                        "outputParams": [
                            "kind",
                            "etag",
                            "id",
                            "selfLink",
                            "datasetReference",
                            "defaultTableExpirationMs",
                            "access",
                            "creationTime",
                            "lastModifiedTime",
                            "location",
                            "defaultPartitionExpirationMs",
                            "type",
                            "isCaseInsensitive",
                            "maxTimeTravelHours",
                            "storageBillingModel"
                        ],
                        "PathParams": {
                            "projectId": "my-new-project-4-412310",
                            "datasetId": "dataset4"
                        },
                        "body": {},
                        "Integration_Name": "BigQueryData",
                        "schemaID": "6603e7471574a22f5d1a11ee",
                        "selectedInputParams": {},
                        "selectedPathParams": {
                            "projectId": "my-new-project-4-412310",
                            "datasetId": "dataset4"
                        },
                        "selectedBody": {},
                        "outPutResponse": "65cc59061b707d34e9375158",
                        "outputParamsTag": {
                            "id": "Mobius_PI_id",
                            "creationTime": "Mobius_PI_total_cost"
                        },
                        "indexes": {
                            "id": "primary",
                            "creationTime": "primary"
                        }
                    }
                ],
                "selectedOutputParams": [
                    "kind",
                    "totalItems"
                ],
                "selectedWorkflows": [
                    "purge workflow"
                ],
                "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
                "selected": true,
                "inputParams": {},
                "outputParams": [
                    "kind",
                    "etag",
                    "tables",
                    "totalItems"
                ],
                "PathParams": {
                    "projectId": "my-new-project-4-412310",
                    "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
                },
                "body": {},
                "Integration_Name": "BigQuery_Pipeline",
                "schemaID": "",
                "selectedInputParams": {},
                "selectedPathParams": {
                    "projectId": "my-new-project-4-412310",
                    "datasetId": "dataset4"
                },
                "selectedBody": {},
                "outPutResponse": "65cb674c1b707d34e9375023",
                "outputParamsTag": {},
                "indexes": {
                    "kind": "primary",
                    "totalItems": "primary"
                }
            },
               {
                   "id": "OpenAI_Activities",
                   "name": "OpenAI_Activities",
                   "children": [],
                   "selectedOutputParams": [
                       "organization_id",
                       "object",
                       "data",
                       "ft_data",
                       "dalle_api_data",
                       "whisper_api_data"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "end_date": "2024-03-01",
                       "start_date": "2024-02-01"
                   },
                   "outputParams": [
                       "object",
                       "data",
                       "ft_data",
                       "dalle_api_data",
                       "whisper_api_data",
                       "tts_api_data",
                       "assistant_code_interpreter_data"
                   ],
                   "PathParams": {},
                   "body": {},
                   "Integration_Name": "OpenAI Usage",
                   "schemaID": "",
                   "selectedInputParams": {
                       "end_date": "2024-03-14",
                       "start_date": "2024-03-12"
                   },
                   "selectedPathParams": {},
                   "selectedBody": {},
                   "outPutResponse": "",
                   "outputParamsTag": {
                       "organization_id": "Mobius_PI_total_usage",
                       "object": "Mobius_PI_rolling_avg_usage",
                       "data": "Mobius_PI_id",
                       "ft_data": "Mobius_PI_api_call_volume"
                   },
                   "indexes": {
                       "organization_id": "secondary",
                       "object": "secondary",
                       "data": "secondary"
                   }
               },
               {
                   "id": "billing usage",
                   "name": "billing usage",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "end_date": "2024-03-01",
                       "start_date": "2024-02-01"
                   },
                   "outputParams": [
                       "object",
                       "daily_costs",
                       "total_usage"
                   ],
                   "PathParams": {},
                   "body": {},
                   "Integration_Name": "OpenAI Usage",
                   "schemaID": "",
                   "selectedInputParams": {
                       "end_date": "2024-03-12",
                       "start_date": "2024-01-01"
                   },
                   "selectedPathParams": {},
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "CostbyResourceGroupName",
                   "name": "CostbyResourceGroupName",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "api_version": "2021-10-01"
                   },
                   "outputParams": [
                       "Cost",
                       "CostUSD",
                       "UsageDate",
                       "ResourceGroupName",
                       "Currency",
                       "timestamp"
                   ],
                   "PathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "body": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               },
                               "totalCostUSD": {
                                   "name": "CostUSD",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "grouping": [
                               {
                                   "type": "Dimension",
                                   "name": "ResourceGroupName"
                               }
                           ]
                       },
                       "timeframe": "Custom",
                       "timePeriod": {
                           "from": "2024-02-13T00:00:00+00:00",
                           "to": "2024-02-14T23:59:59+00:00"
                       }
                   },
                   "Integration_Name": "AzureCostAnalysis",
                   "schemaID": "6606c6711574a22f5d1a1dc2",
                   "selectedInputParams": {
                       "api_version": "2021-10-01"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "selectedBody": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               },
                               "totalCostUSD": {
                                   "name": "CostUSD",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "grouping": [
                               {
                                   "type": "Dimension",
                                   "name": "ResourceGroupName"
                               }
                           ]
                       },
                       "timeframe": "Custom",
                       "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
                   },
                   "outPutResponse": "6606c52b1574a22f5d1a1da5",
                   "outputParamsTag": {
                       "CostUSD": "Mobius_PI_total_cost"
                   },
                   "indexes": {
                       "UsageDate": "primary",
                       "timestamp": "primary"
                   }
               },
               {
                   "id": "ForecastedCostData",
                   "name": "ForecastedCostData",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "api_version": "2021-10-01",
                       "_24top": "5000"
                   },
                   "outputParams": [
                       "Cost",
                       "UsageDate",
                       "CostStatus",
                       "Currency",
                       "timestamp"
                   ],
                   "PathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "body": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "filter": {
                               "Dimensions": {
                                   "Name": "PublisherType",
                                   "Operator": "In",
                                   "Values": [
                                       "azure"
                                   ]
                               }
                           }
                       },
                       "includeActualCost": true,
                       "includeFreshPartialCost": false,
                       "timePeriod": {
                           "from": "2024-02-10T00:00:00+00:00",
                           "to": "2024-02-19T23:59:59+00:00"
                       }
                   },
                   "Integration_Name": "AzureCostAnalysis",
                   "schemaID": "6606a7a71574a22f5d1a1ca2",
                   "selectedInputParams": {
                       "api_version": "2021-10-01",
                       "_24top": "5000"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "selectedBody": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "filter": {
                               "Dimensions": {
                                   "Name": "PublisherType",
                                   "Operator": "In",
                                   "Values": [
                                       "azure"
                                   ]
                               }
                           }
                       },
                       "includeActualCost": true,
                       "includeFreshPartialCost": false,
                       "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
                   },
                   "outPutResponse": "660699a21574a22f5d1a1c87",
                   "outputParamsTag": {
                       "UsageDate": "Mobius_PI_date",
                       "timestamp": "Mobius_PI_time"
                   },
                   "indexes": {
                       "UsageDate": "primary",
                       "timestamp": "primary"
                   }
               },
               {
                   "id": "CostbyServiceName",
                   "name": "CostbyServiceName",
                   "children": [],
                   "selectedOutputParams": [
                       "UsageDate",
                       "timestamp"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "api_version": "2021-10-01",
                       "top": "5000"
                   },
                   "outputParams": [
                       "Cost",
                       "CostUSD",
                       "UsageDate",
                       "ServiceName",
                       "Currency",
                       "timestamp"
                   ],
                   "PathParams": {
                       "subscriptionId": ""
                   },
                   "body": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               },
                               "totalCostUSD": {
                                   "name": "CostUSD",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "grouping": [
                               {
                                   "type": "Dimension",
                                   "name": "ServiceName"
                               }
                           ]
                       },
                       "timeframe": "Custom",
                       "timePeriod": {
                           "from": "2024-02-13T00:00:00+00:00",
                           "to": "2024-02-14T23:59:59+00:00"
                       }
                   },
                   "Integration_Name": "AzureCostAnalysis",
                   "schemaID": "660a625b1574a22f5d1a1f20",
                   "selectedInputParams": {
                       "api_version": "2021-10-01",
                       "top": "5000"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "selectedBody": {
                       "type": "ActualCost",
                       "dataSet": {
                           "granularity": "Daily",
                           "aggregation": {
                               "totalCost": {
                                   "name": "Cost",
                                   "function": "Sum"
                               },
                               "totalCostUSD": {
                                   "name": "CostUSD",
                                   "function": "Sum"
                               }
                           },
                           "sorting": [
                               {
                                   "direction": "ascending",
                                   "name": "UsageDate"
                               }
                           ],
                           "grouping": [
                               {
                                   "type": "Dimension",
                                   "name": "ServiceName"
                               }
                           ]
                       },
                       "timeframe": "Custom",
                       "timePeriod": {
                           "from": "2024-02-13T00:00:00+00:00",
                           "to": "2024-02-14T23:59:59+00:00"
                       }
                   },
                   "outPutResponse": "660a5f4c1574a22f5d1a1f1d",
                   "outputParamsTag": {
                       "UsageDate": "Mobius_PI_date",
                       "timestamp": "Mobius_PI_time"
                   },
                   "indexes": {
                       "UsageDate": "primary",
                       "timestamp": "primary"
                   }
               },
               {
                   "id": "StorageActivityLogs",
                   "name": "StorageActivityLogs",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
                       "api_version": "2015-04-01"
                   },
                   "outputParams": [
                       "value"
                   ],
                   "PathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "body": {},
                   "Integration_Name": "StrorageAccount",
                   "schemaID": "",
                   "selectedInputParams": {
                       "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
                       "api_version": "2015-04-01"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "StorageUsageDetails",
                   "name": "StorageUsageDetails",
                   "children": [],
                   "selectedOutputParams": [],
                   "selectedWorkflows": [
                       "ingestion workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "api_version": "2019-07-01"
                   },
                   "outputParams": [
                       "value"
                   ],
                   "PathParams": {
                       "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
                   },
                   "body": {},
                   "Integration_Name": "StrorageAccount",
                   "schemaID": "",
                   "selectedInputParams": {
                       "api_version": "2017-11-30"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
                   },
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "StorageIngress",
                   "name": "StorageIngress",
                   "children": [],
                   "selectedOutputParams": [
                       "cost",
                       "timespan"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-02-09T07%3A05%3A00.000Z",
                       "interval": "PT5M",
                       "metricnames": "Ingress",
                       "aggregation": "total",
                       "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                       "autoadjusttimegrain": true,
                       "validatedimensions": false
                   },
                   "outputParams": [
                       "cost",
                       "timespan",
                       "interval",
                       "value",
                       "namespace",
                       "resourceregion"
                   ],
                   "PathParams": {
                       "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01",
                       "storageAccountName": "mohammedsaleem",
                       "api_version": "2019-07-01"
                   },
                   "body": {},
                   "Integration_Name": "StrorageAccount",
                   "schemaID": "",
                   "selectedInputParams": {
                       "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
                       "interval": "PT5M",
                       "metricnames": "Ingress",
                       "aggregation": "total",
                       "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                       "autoadjusttimegrain": true,
                       "validatedimensions": false,
                       "api_version": "2019-07-01"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
                   },
                   "selectedBody": {},
                   "outPutResponse": "",
                   "outputParamsTag": {
                       "cost": "Mobius_PI_total_cost",
                       "timespan": "Mobius_PI_time"
                   },
                   "indexes": {
                       "cost": "primary",
                       "timespan": "primary"
                   }
               },
               {
                   "id": "UsedCapacity",
                   "name": "UsedCapacity",
                   "children": [],
                   "selectedOutputParams": [
                       "cost",
                       "timespan"
                   ],
                   "selectedWorkflows": [],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "timespan": "2000-01-13%2F2024-04-01",
                       "interval": "PT1H",
                       "metricnames": "UsedCapacity",
                       "aggregation": "average",
                       "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                       "validatedimensions": "false",
                       "api-version": "2019-07-01"
                   },
                   "outputParams": [
                       "cost",
                       "timespan",
                       "interval",
                       "value",
                       "namespace",
                       "resourceregion"
                   ],
                   "PathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
                       "resourceGroupName": "edo"
                   },
                   "body": {},
                   "Integration_Name": "StrorageAccount",
                   "schemaID": "",
                   "selectedInputParams": {
                       "timespan": "2000-01-13%2F2024-04-01",
                       "interval": "PT1H",
                       "metricnames": "UsedCapacity",
                       "aggregation": "average",
                       "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                       "validatedimensions": "false",
                       "api-version": "2019-07-01"
                   },
                   "selectedPathParams": {
                       "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
                       "resourceGroupName": "edo"
                   },
                   "selectedBody": {},
                   "outPutResponse": "660a96c61574a22f5d1a205f",
                   "outputParamsTag": {},
                   "indexes": {}
               },
               {
                   "id": "GetBucketDetails",
                   "name": "GetBucketDetails",
                   "children": [],
                   "selectedOutputParams": [
                       "kind"
                   ],
                   "selectedWorkflows": [
                       "purge workflow",
                       "ingestion workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "projection": "full"
                   },
                   "outputParams": [
                       "kind",
                       "items"
                   ],
                   "PathParams": {
                       "bucketName": "gaianbucket"
                   },
                   "body": {},
                   "Integration_Name": "CloudStorage",
                   "schemaID": "",
                   "selectedInputParams": {
                       "projection": "full",
                       "bucketName": "gaianbucket"
                   },
                   "selectedPathParams": {},
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "GetBucketList",
                   "name": "GetBucketList",
                   "children": [],
                   "selectedOutputParams": [
                       "kind",
                       "items"
                   ],
                   "selectedWorkflows": [
                       "ingestion workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {
                       "project": "magnetic-nimbus-414111",
                       "bucketName": "gaianbucket"
                   },
                   "outputParams": [
                       "kind",
                       "items"
                   ],
                   "PathParams": {},
                   "body": {},
                   "Integration_Name": "CloudStorage",
                   "schemaID": "",
                   "selectedInputParams": {
                       "project": "magnetic-nimbus-414111",
                       "bucketName": "gaianbucket"
                   },
                   "selectedPathParams": {},
                   "selectedBody": {},
                   "outPutResponse": ""
               },
               {
                   "id": "Project Storage",
                   "name": "Project Storage",
                   "children": [],
                   "selectedOutputParams": [
                       "timestamp",
                       "total_logical_bytes",
                       "project_id"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "project_id",
                       "total_logical_bytes",
                       "timestamp"
                   ],
                   "PathParams": {
                       "projectId": ""
                   },
                   "body": {
                       "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
                       "useLegacySql": false
                   },
                   "Integration_Name": "CloudStorage",
                   "schemaID": "660515fe1574a22f5d1a145b",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "magnetic-nimbus-414111"
                   },
                   "selectedBody": {
                       "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
                       "useLegacySql": "false"
                   },
                   "outPutResponse": "65fbf7b71574a22f5d1a0a82",
                   "outputParamsTag": {
                       "project_id": "Mobius_PI_api_call_volume",
                       "total_logical_bytes": "Mobius_PI_storage_growth"
                   },
                   "indexes": {
                       "timestamp": "primary",
                       "total_logical_bytes": "primary"
                   }
               },
               {
                   "id": "TableStorageUsageTimeLine",
                   "name": "TableStorageUsageTimeLine",
                   "children": [],
                   "selectedOutputParams": [
                       "project_id",
                       "table_name"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "usage_date",
                       "project_id",
                       "table_catalog",
                       "project_number",
                       "table_schema",
                       "table_name",
                       "billable_total_logical_usage",
                       "billable_active_logical_usage",
                       "billable_long_term_logical_usage",
                       "billable_total_physical_usage",
                       "billable_active_physical_usage",
                       "billable_long_term_physical_usage"
                   ],
                   "PathParams": {
                       "projectId": ""
                   },
                   "body": {
                       "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
                       "useLegacySql": false
                   },
                   "Integration_Name": "CloudStorage",
                   "schemaID": "6602c73b1574a22f5d1a1010",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "magnetic-nimbus-414111"
                   },
                   "selectedBody": {
                       "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
                       "useLegacySql": "false"
                   },
                   "outPutResponse": "65fd15e11574a22f5d1a0d36",
                   "outputParamsTag": {},
                   "indexes": {
                       "project_id": "primary",
                       "table_name": "primary"
                   }
               },
               {
                   "id": "Tables Storage",
                   "name": "Tables Storage",
                   "children": [],
                   "selectedOutputParams": [
                       "table_name",
                       "project_id"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "project_id",
                       "project_number",
                       "table_catalog",
                       "table_schema",
                       "table_name",
                       "creation_time",
                       "total_rows",
                       "total_partitions",
                       "total_logical_bytes",
                       "active_logical_bytes",
                       "long_term_logical_bytes",
                       "current_physical_bytes",
                       "total_physical_bytes",
                       "active_physical_bytes",
                       "long_term_physical_bytes",
                       "time_travel_physical_bytes",
                       "storage_last_modified_time",
                       "deleted",
                       "table_type",
                       "fail_safe_physical_bytes",
                       "last_metadata_refresh_time"
                   ],
                   "PathParams": {
                       "projectId": ""
                   },
                   "body": {
                       "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
                       "useLegacySql": false
                   },
                   "Integration_Name": "CloudStorage",
                   "schemaID": "6602c6c61574a22f5d1a1007",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": ""
                   },
                   "selectedBody": {
                       "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
                       "useLegacySql": false
                   },
                   "outPutResponse": "65fc02571574a22f5d1a0aac",
                   "outputParamsTag": {},
                   "indexes": {
                       "table_name": "primary",
                       "project_id": "primary"
                   }
               },
               {
                   "id": "Forecast Storage Billing",
                   "name": "Forecast Storage Billing",
                   "children": [],
                   "selectedOutputParams": [
                       "dataset_name",
                       "active_physical_gib"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "dataset_name",
                       "active_logical_gib",
                       "long_term_logical_gib",
                       "active_physical_gib",
                       "long_term_physical_gib",
                       "time_travel_physical_gib",
                       "fail_safe_physical_gib",
                       "active_compression_ratio",
                       "long_term_compression_ratio",
                       "forecast_active_logical_cost",
                       "forecast_long_term_logical_cost",
                       "forecast_active_physical_cost",
                       "forecast_long_term_physical_cost",
                       "forecast_total_cost_difference"
                   ],
                   "PathParams": {
                       "projectId": ""
                   },
                   "body": {
                       "query": "DECLARE active_logical_gib_price FLOAT64 DEFAULT 0.02; DECLARE long_term_logical_gib_price FLOAT64 DEFAULT 0.01; DECLARE active_physical_gib_price FLOAT64 DEFAULT 0.04; DECLARE long_term_physical_gib_price FLOAT64 DEFAULT 0.02; WITH storage_sizes AS ( SELECT table_schema AS dataset_name, SUM(IF(deleted=false, active_logical_bytes, 0)) / power(1024, 3) AS active_logical_gib, SUM(IF(deleted=false, long_term_logical_bytes, 0)) / power(1024, 3) AS long_term_logical_gib, SUM(active_physical_bytes) / power(1024, 3) AS active_physical_gib, SUM(active_physical_bytes - time_travel_physical_bytes) / power(1024, 3) AS active_no_tt_physical_gib, SUM(long_term_physical_bytes) / power(1024, 3) AS long_term_physical_gib, SUM(time_travel_physical_bytes) / power(1024, 3) AS time_travel_physical_gib, SUM(fail_safe_physical_bytes) / power(1024, 3) AS fail_safe_physical_gib, FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_BY_PROJECT WHERE total_physical_bytes > 0 AND table_type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset_name, ROUND(active_logical_gib, 2) AS active_logical_gib, ROUND(long_term_logical_gib, 2) AS long_term_logical_gib, ROUND(active_physical_gib, 2) AS active_physical_gib, ROUND(long_term_physical_gib, 2) AS long_term_physical_gib, ROUND(time_travel_physical_gib, 2) AS time_travel_physical_gib, ROUND(fail_safe_physical_gib, 2) AS fail_safe_physical_gib, ROUND(SAFE_DIVIDE(active_logical_gib, active_no_tt_physical_gib), 2) AS active_compression_ratio, ROUND(SAFE_DIVIDE(long_term_logical_gib, long_term_physical_gib), 2) AS long_term_compression_ratio, ROUND(active_logical_gib * active_logical_gib_price, 2) AS forecast_active_logical_cost, ROUND(long_term_logical_gib * long_term_logical_gib_price, 2) AS forecast_long_term_logical_cost, ROUND((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price, 2) AS forecast_active_physical_cost, ROUND(long_term_physical_gib * long_term_physical_gib_price, 2) AS forecast_long_term_physical_cost, ROUND(((active_logical_gib * active_logical_gib_price) + (long_term_logical_gib * long_term_logical_gib_price)) - (((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price) + (long_term_physical_gib * long_term_physical_gib_price)), 2) AS forecast_total_cost_difference FROM storage_sizes ORDER BY (forecast_active_logical_cost + forecast_active_physical_cost) DESC;",
                       "useLegacySql": false
                   },
                   "Integration_Name": "CloudStorage",
                   "schemaID": "6602c4741574a22f5d1a0fff",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "magnetic-nimbus-414111"
                   },
                   "selectedBody": {
                       "query": "DECLARE active_logical_gib_price FLOAT64 DEFAULT 0.02; DECLARE long_term_logical_gib_price FLOAT64 DEFAULT 0.01; DECLARE active_physical_gib_price FLOAT64 DEFAULT 0.04; DECLARE long_term_physical_gib_price FLOAT64 DEFAULT 0.02; WITH storage_sizes AS ( SELECT table_schema AS dataset_name, SUM(IF(deleted=false, active_logical_bytes, 0)) / power(1024, 3) AS active_logical_gib, SUM(IF(deleted=false, long_term_logical_bytes, 0)) / power(1024, 3) AS long_term_logical_gib, SUM(active_physical_bytes) / power(1024, 3) AS active_physical_gib, SUM(active_physical_bytes - time_travel_physical_bytes) / power(1024, 3) AS active_no_tt_physical_gib, SUM(long_term_physical_bytes) / power(1024, 3) AS long_term_physical_gib, SUM(time_travel_physical_bytes) / power(1024, 3) AS time_travel_physical_gib, SUM(fail_safe_physical_bytes) / power(1024, 3) AS fail_safe_physical_gib, FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_BY_PROJECT WHERE total_physical_bytes > 0 AND table_type = 'BASE TABLE' GROUP BY 1 ) SELECT dataset_name, ROUND(active_logical_gib, 2) AS active_logical_gib, ROUND(long_term_logical_gib, 2) AS long_term_logical_gib, ROUND(active_physical_gib, 2) AS active_physical_gib, ROUND(long_term_physical_gib, 2) AS long_term_physical_gib, ROUND(time_travel_physical_gib, 2) AS time_travel_physical_gib, ROUND(fail_safe_physical_gib, 2) AS fail_safe_physical_gib, ROUND(SAFE_DIVIDE(active_logical_gib, active_no_tt_physical_gib), 2) AS active_compression_ratio, ROUND(SAFE_DIVIDE(long_term_logical_gib, long_term_physical_gib), 2) AS long_term_compression_ratio, ROUND(active_logical_gib * active_logical_gib_price, 2) AS forecast_active_logical_cost, ROUND(long_term_logical_gib * long_term_logical_gib_price, 2) AS forecast_long_term_logical_cost, ROUND((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price, 2) AS forecast_active_physical_cost, ROUND(long_term_physical_gib * long_term_physical_gib_price, 2) AS forecast_long_term_physical_cost, ROUND(((active_logical_gib * active_logical_gib_price) + (long_term_logical_gib * long_term_logical_gib_price)) - (((active_no_tt_physical_gib + time_travel_physical_gib + fail_safe_physical_gib) * active_physical_gib_price) + (long_term_physical_gib * long_term_physical_gib_price)), 2) AS forecast_total_cost_difference FROM storage_sizes ORDER BY (forecast_active_logical_cost + forecast_active_physical_cost) DESC;",
                       "useLegacySql": "false"
                   },
                   "outPutResponse": "65fd14c21574a22f5d1a0d30",
                   "outputParamsTag": {},
                   "indexes": {
                       "dataset_name": "primary",
                       "active_physical_gib": "primary"
                   }
               },
              
               {
                   "id": "DailyProjectCost",
                   "name": "DailyProjectCost",
                   "children": [   {
                    "id": "BillingReport",
                    "name": "BillingReport",
                    "children": [  ],
                    "selectedOutputParams": [
                    ],
                    "selectedWorkflows": [
                        "ingestion workflow"
                    ],
                    "description": "API description not found",
                    "selected": true,
                    "inputParams": {},
                    "outputParams": [
                        "invoice_date",
                        "name",
                        "description",
                        "daily_cost_inr",
                        "daily_credits",
                        "timestamp"
                    ],
                    "PathParams": {
                        "projectId": ""
                    },
                    "body": {
                        "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
                        "useLegacySql": false
                    },
                    "Integration_Name": "Cost Analysis",
                    "schemaID": "",
                    "selectedInputParams": {},
                    "selectedPathParams": {
                        "projectId": "magnetic-nimbus-414111"
                    },
                    "selectedBody": {
                        "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
                        "useLegacySql": "false"
                    },
                    "outPutResponse": "660aac7e1574a22f5d1a2135",
                    "outputParamsTag": {},
                    "indexes": {}
                },
                {
                 "id": "GetCostUsage",
                 "name": "GetCostUsage",
                 "children": [],
                 "selectedOutputParams": [
                     "total_cost",
                     "description"
                 ],
                 "selectedWorkflows": [
                     "purge workflow"
                 ],
                 "description": "API description not found",
                 "selected": true,
                 "inputParams": {},
                 "outputParams": [
                     "name",
                     "description",
                     "project_labels",
                     "total_cost",
                     "total_credits"
                 ],
                 "PathParams": {
                     "projectId": ""
                 },
                 "body": {
                     "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
                     "useLegacySql": false
                 },
                 "Integration_Name": "Cost Analysis",
                 "schemaID": "660a99331574a22f5d1a2075",
                 "selectedInputParams": {},
                 "selectedPathParams": {
                     "projectId": "magnetic-nimbus-414111"
                 },
                 "selectedBody": {
                     "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
                     "useLegacySql": "false"
                 },
                 "outPutResponse": "65e5bc9228ebd37244d9b2c1",
                 "outputParamsTag": {},
                 "indexes": {
                     "total_cost": "primary",
                     "description": "primary",
                     "total_credits":"secondary"
                 }
             }],
                   "selectedOutputParams": [
                       "totalBytesProcessed",
                       "queryId"
                   ],
                   "selectedWorkflows": [
                       "purge workflow"
                   ],
                   "description": "API description not found",
                   "selected": true,
                   "inputParams": {},
                   "outputParams": [
                       "kind",
                       "schema",
                       "jobReference",
                       "totalRows",
                       "rows",
                       "totalBytesProcessed",
                       "jobComplete",
                       "cacheHit",
                       "queryId",
                       "jobCreationReason"
                   ],
                   "PathParams": {
                       "projectId": "magnetic-nimbus-414111"
                   },
                   "body": {
                       "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
                       "useLegacySql": false
                   },
                   "Integration_Name": "Cost Analysis",
                   "schemaID": "660aa27b1574a22f5d1a20e3",
                   "selectedInputParams": {},
                   "selectedPathParams": {
                       "projectId": "magnetic-nimbus-414111"
                   },
                   "selectedBody": {
                       "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(\"2024-03-15\") LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(\"2024-01-01\") AND TIMESTAMP(\"2024-03-15\") ORDER BY invoice_date, project.name, service.description",
                       "useLegacySql": false
                   },
                   "outPutResponse": "65f3f0415f353406a916e714",
                   "indexes": {
                       "totalBytesProcessed": "primary",
                       "queryId": "primary"
                   }
               },
            
             
           ],
           "id": "TestUser1"
       }
]
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list").reply(200, {
  entities: [
    {
      "UserId": "TestUser1",
      "Username": "Test1",
      "selectedlist": [
        {
            "id": "cost",
            "name": "cost",
            "children": [],
            "selectedOutputParams": ["expenditure","employeeId"],
            "selectedWorkflows": [],
            "description": "API description not found",
            "selected": true,
            "inputParams": {},
            "outputParams": [
               "employeeId","expenditure"
            ],
            "PathParams": {},
            "body": {},
            "Integration_Name": "sample",
            "schemaID": "",
            "selectedInputParams": {},
            "selectedPathParams": {},
            "selectedBody": {},
            "outPutResponse": "1",
            "outputParamsTag": {},
            "indexes": {
                "employeeId":"secondary"
            }
        },
        
   
    {
        "id": "department",
        "name": "department",
        "children": [],
        "selectedOutputParams": ["name"],
        "selectedWorkflows": [],
        "description": "API description not found",
        "selected": true,
        "inputParams": {},
        "outputParams": [
            "name",
            "departmentId",
            "description"
        ],
        "PathParams": {},
        "body": {},
        "Integration_Name": "sample",
        "schemaID": "",
        "selectedInputParams": {},
        "selectedPathParams": {},
        "selectedBody": {},
        "outPutResponse": "3",
        "outputParamsTag": {},
        "indexes": {}
    },
    {
        "id": "employee",
        "name": "employee",
        "children": [],
        "selectedOutputParams": ["name","departmentId","designation","employeeId"],
        "selectedWorkflows": [],
        "description": "API description not found",
        "selected": true,
        "inputParams": {},
        "outputParams": [
            "name",
            "employeeId",
            "departmentId",
            "joinDate",
            "designation"
        ],
        "PathParams": {},
        "body": {},
        "Integration_Name": "sample",
        "schemaID": "",
        "selectedInputParams": {},
        "selectedPathParams": {},
        "selectedBody": {},
        "outPutResponse": "2",
        "outputParamsTag": {},
        "indexes": {
            "departmentId":"secondary"
        }
    },
    {
        "id": "salary",
        "name": "salary",
        "children": [],
        "selectedOutputParams": ["employeeId","salary"],
        "selectedWorkflows": [],
        "description": "API description not found",
        "selected": true,
        "inputParams": {},
        "outputParams": [
            "salary",
            "employeeId"
        
        ],
        "PathParams": {},
        "body": {},
        "Integration_Name": "sample",
        "schemaID": "",
        "selectedInputParams": {},
        "selectedPathParams": {},
        "selectedBody": {},
        "outPutResponse": "4",
        "outputParamsTag": {},
        "indexes": {
            "employeeId":"secondary"
        }
    },
          {
              "id": "Forecasted Cost Data",
              "name": "Forecasted Cost Data",
              "children": [],
              "selectedOutputParams": [
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "api_version": "2021-10-01"
              },
              "outputParams": [
                  "properties",
                  "id",
                  "name",
                  "type",
                  "location",
                  "eTag"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {},
              "Integration_Name": "Azure Cost Analysis",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {},
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "VirtualMachineData",
              "name": "VirtualMachineData",
              "children": [],
              "selectedOutputParams": [
                  "cost"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "timespan": "string",
                  "interval": "string",
                  "metricnames": "string",
                  "aggregation": "string",
                  "api_version": "string"
              },
              "outputParams": [
                  "cost",
                  "timespan",
                  "interval",
                  "value",
                  "namespace",
                  "resourceregion"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {},
              "Integration_Name": "VirtualMachine",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "SystemLogs",
              "name": "SystemLogs",
              "children": [],
              "selectedOutputParams": [
                  "actor"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "since": "2024-03-10",
                  "q": "Saikiran%20Gadupathi"
              },
              "outputParams": [
                  "actor",
                  "client",
                  "device",
                  "authenticationContext",
                  "displayMessage",
                  "eventType",
                  "outcome",
                  "published",
                  "securityContext",
                  "severity",
                  "debugContext",
                  "legacyEventType",
                  "transaction",
                  "uuid",
                  "version",
                  "request",
                  "target"
              ],
              "PathParams": {
                  "domain": "dev-69282603-admin.okta.com"
              },
              "body": {},
              "Integration_Name": "SystemLogs",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "domain": "dev-69282603-admin.okta.com"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
            "id": "SystemLogs",
            "name": "SystemLogs",
            "children": [],
            "selectedOutputParams": [
                "actor"
            ],
            "selectedWorkflows": [
                "purge workflow"
            ],
            "description": "API description not found",
            "selected": true,
            "inputParams": {
                "since": "2024-03-10",
                "q": "Saikiran%20Gadupathi"
            },
            "outputParams": [
                "actor",
                "client",
                "device",
                "authenticationContext",
                "displayMessage",
                "eventType",
                "outcome",
                "published",
                "securityContext",
                "severity",
                "debugContext",
                "legacyEventType",
                "transaction",
                "uuid",
                "version",
                "request",
                "target"
            ],
            "PathParams": {
                "domain": "dev-69282603-admin.okta.com"
            },
            "body": {},
            "Integration_Name": "Okta_Pipeline",
            "schemaID": "",
            "selectedInputParams": {},
            "selectedPathParams": {
                "domain": "dev-69282603-admin.okta.com"
            },
            "selectedBody": {},
            "outPutResponse": ""
        },
          {
              "id": "FilteredLogs",
              "name": "FilteredLogs",
              "children": [],
              "selectedOutputParams": [],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "actor",
                  "client",
                  "device",
                  "authenticationContext",
                  "displayMessage",
                  "eventType",
                  "outcome",
                  "published",
                  "securityContext",
                  "severity",
                  "debugContext",
                  "legacyEventType",
                  "transaction",
                  "uuid",
                  "version",
                  "request",
                  "target"
              ],
              "PathParams": {
                  "since": "2024-03-04",
                  "q": "Saikiran%20Gadupathi"
              },
              "body": {},
              "Integration_Name": "SystemLogs",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "since": "2024-03-04",
                  "q": "Saikiran%20Gadupathi"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "Application_Users",
              "name": "Application_Users",
              "children": [],
              "selectedOutputParams": [
                  "0"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "0"
              ],
              "PathParams": {
                  "app_id": "0oaf8annb5fGMKk9A5d7",
                  "domain": "dev-69282603-admin.okta.com"
              },
              "body": {},
              "Integration_Name": "ApplicationUsers",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "app_id": "0oaf8annb5fGMKk9A5d7"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "ApplicationOperations",
              "name": "ApplicationOperations",
              "children": [],
              "selectedOutputParams": [
                  "id",
                  "status"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "q": "saikiran"
              },
              "outputParams": [
                  "id",
                  "name",
                  "label",
                  "status",
                  "lastUpdated",
                  "created",
                  "accessibility",
                  "visibility",
                  "features",
                  "signOnMode",
                  "credentials",
                  "settings",
                  "_links"
              ],
              "PathParams": {
                  "domain": "dev-69282603-admin.okta.com"
              },
              "body": {},
              "Integration_Name": "ApplicationOperations",
              "schemaID": "",
              "selectedInputParams": {
                  "q": "saikiran"
              },
              "selectedPathParams": {
                  "domain": "dev-69282603-admin.okta.com"
              },
              "selectedBody": {},
              "outPutResponse": "65d2f9a61b707d34e93754cf",
              "outputParamsTag": {
                  "status": "Mobius_PI_cumulative_usage",
                  "id": "Mobius_PI_id"
              },
              "indexes": {
                  "id": "primary",
                  "status": "primary"
              }
          },
          {
              "id": "Snowflake DATA SHARING USAGE",
              "name": "Snowflake DATA SHARING USAGE",
              "children": [],
              "selectedOutputParams": [
                  "requestId",
                  "createdOn"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "resultSetMetaData",
                  "data",
                  "code",
                  "statementStatusUrl",
                  "requestId",
                  "sqlState",
                  "statementHandle",
                  "message",
                  "createdOn"
              ],
              "PathParams": {
                  "domain": "axoiihb-of84409"
              },
              "body": {
                  "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
                  "timeout": "1000",
                  "database": "GAIAN1",
                  "schema": "TABLE1",
                  "warehouse": "FIRST_WAREHOUSE",
                  "role": "ACCOUNTADMIN"
              },
              "Integration_Name": "Data Sharing Usage",
              "schemaID": "",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "domain": "axoiihb-of84409"
              },
              "selectedBody": {
                  "statement": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE",
                  "timeout": "1000",
                  "database": "GAIAN1",
                  "schema": "TABLE1",
                  "warehouse": "FIRST_WAREHOUSE",
                  "role": "ACCOUNTADMIN"
              },
              "outPutResponse": "",
              "outputParamsTag": {
                  "resultSetMetaData": "Mobius_PI_rolling_avg_usage",
                  "data": "Mobius_PI_avg_cost_per_usage",
                  "code": "Mobius_PI_api_call_volume",
                  "requestId": "Mobius_PI_id",
                  "createdOn": "Mobius_PI_time"
              },
              "indexes": {
                  "resultSetMetaData": "none",
                  "data": "primary",
                  "code": "secondary",
                  "requestId": "primary",
                  "createdOn": "primary"
              }
          },
          {
              "id": "Snowflake_Account_Usage",
              "name": "Snowflake_Account_Usage",
              "children": [],
              "selectedOutputParams": [
                  "USAGE_DATE",
                  "STORAGE_BYTES"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "USAGE_DATE",
                  "STORAGE_BYTES",
                  "STAGE_BYTES",
                  "FAILSAFE_BYTES",
                  "HYBRID_TABLE_STORAGE_BYTES"
              ],
              "PathParams": {
                  "domain": "axoiihb-of84409"
              },
              "body": {
                  "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
              },
              "Integration_Name": "Account Usage",
              "schemaID": "660660c81574a22f5d1a1a74",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "domain": "axoiihb-of84409"
              },
              "selectedBody": {
                  "statement": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
              },
              "outPutResponse": "66065b931574a22f5d1a1a0e",
              "outputParamsTag": {
                  "USAGE_DATE": "Mobius_PI_date",
                  "STORAGE_BYTES": "Mobius_PI_total_usage"
              },
              "indexes": {
                  "USAGE_DATE": "primary",
                  "STORAGE_BYTES": "primary"
              }
          },
          {
              "id": "Snowflake_Organization_Usage",
              "name": "Snowflake_Organization_Usage",
              "children": [],
              "selectedOutputParams": [
                  "USAGE_DATE",
                  "USAGE_TYPE"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "ORGANIZATION_NAME",
                  "CONTRACT_NUMBER",
                  "ACCOUNT_NAME",
                  "ACCOUNT_LOCATOR",
                  "REGION",
                  "SERVICE_LEVEL",
                  "USAGE_DATE",
                  "USAGE_TYPE",
                  "USAGE",
                  "CURRENCY",
                  "USAGE_IN_CURRENCY",
                  "BALANCE_SOURCE",
                  "BILLING_TYPE",
                  "RATING_TYPE",
                  "SERVICE_TYPE",
                  "IS_ADJUSTMENT"
              ],
              "PathParams": {
                  "domain": "axoiihb-of84409"
              },
              "body": {
                  "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
              },
              "Integration_Name": "Organization Usage",
              "schemaID": "660692611574a22f5d1a1bf4",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "domain": "axoiihb-of84409"
              },
              "selectedBody": {
                  "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
              },
              "outPutResponse": "65fd1b231574a22f5d1a0d5c",
              "outputParamsTag": {
                  "USAGE_DATE": "Mobius_PI_date",
                  "USAGE_TYPE": "Mobius_PI_cost_changes"
              },
              "indexes": {
                  "USAGE_DATE": "primary",
                  "USAGE_TYPE": "primary"
              }
          },
          {
            "id": "Snowflake Organization Usage",
            "name": "Snowflake Organization Usage",
            "children": [],
            "selectedOutputParams": [
                "USAGE_DATE",
                "USAGE_TYPE"
            ],
            "selectedWorkflows": [
                "purge workflow"
            ],
            "description": "API description not found",
            "selected": true,
            "inputParams": {},
            "outputParams": [
                "ORGANIZATION_NAME",
                "CONTRACT_NUMBER",
                "ACCOUNT_NAME",
                "ACCOUNT_LOCATOR",
                "REGION",
                "SERVICE_LEVEL",
                "USAGE_DATE",
                "USAGE_TYPE",
                "USAGE",
                "CURRENCY",
                "USAGE_IN_CURRENCY",
                "BALANCE_SOURCE",
                "BILLING_TYPE",
                "RATING_TYPE",
                "SERVICE_TYPE",
                "IS_ADJUSTMENT"
            ],
            "PathParams": {
                "domain": "axoiihb-of84409"
            },
            "body": {
                "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
            },
            "Integration_Name": "Snowflake_Pipeline",
            "schemaID": "660692611574a22f5d1a1bf4",
            "selectedInputParams": {},
            "selectedPathParams": {
                "domain": "axoiihb-of84409"
            },
            "selectedBody": {
                "statement": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
            },
            "outPutResponse": "65fd1b231574a22f5d1a0d5c",
            "outputParamsTag": {
                "USAGE_DATE": "Mobius_PI_date",
                "USAGE_TYPE": "Mobius_PI_cost_changes"
            },
            "indexes": {
                "USAGE_DATE": "primary",
                "USAGE_TYPE": "primary"
            }
        },
          {
              "id": "OpenAI_Activities",
              "name": "OpenAI_Activities",
              "children": [],
              "selectedOutputParams": [
                  "organization_id",
                  "object",
                  "data",
                  "ft_data",
                  "dalle_api_data",
                  "whisper_api_data"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "end_date": "2024-03-14",
                  "start_date": "2024-03-12"
              },
              "outputParams": [
                  "object",
                  "data",
                  "ft_data",
                  "dalle_api_data",
                  "whisper_api_data",
                  "tts_api_data",
                  "assistant_code_interpreter_data"
              ],
              "PathParams": {},
              "body": {},
              "Integration_Name": "OpenAI Usage",
              "schemaID": "65e9ab5228ebd37244da4a28",
              "selectedInputParams": {
                  "end_date": "2024-03-14",
                  "start_date": "2024-03-12"
              },
              "selectedPathParams": {},
              "selectedBody": {},
              "outPutResponse": "",
              "outputParamsTag": {
                  "organization_id": "Mobius_PI_total_usage",
                  "object": "Mobius_PI_rolling_avg_usage",
                  "data": "Mobius_PI_id",
                  "ft_data": "Mobius_PI_api_call_volume"
              },
              "indexes": {
                  "organization_id": "secondary",
                  "object": "secondary",
                  "data": "secondary"
              }
          },
          {
              "id": "billing usage",
              "name": "billing usage",
              "children": [],
              "selectedOutputParams": [],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "end_date": "2024-03-12",
                  "start_date": "2024-01-01"
              },
              "outputParams": [
                  "object",
                  "daily_costs",
                  "total_usage"
              ],
              "PathParams": {},
              "body": {},
              "Integration_Name": "OpenAI Usage",
              "schemaID": "65e98f3728ebd37244da3fa3",
              "selectedInputParams": {
                  "end_date": "2024-03-12",
                  "start_date": "2024-01-01"
              },
              "selectedPathParams": {},
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "StorageActivityLogs",
              "name": "StorageActivityLogs",
              "children": [],
              "selectedOutputParams": [],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
                  "api_version": "2015-04-01"
              },
              "outputParams": [
                  "value"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {},
              "Integration_Name": "StrorageAccount",
              "schemaID": "",
              "selectedInputParams": {
                  "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
                  "api_version": "2015-04-01"
              },
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "StorageUsageDetails",
              "name": "StorageUsageDetails",
              "children": [],
              "selectedOutputParams": [],
              "selectedWorkflows": [
                  "ingestion workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "api_version": "2017-11-30"
              },
              "outputParams": [
                  "value"
              ],
              "PathParams": {
                  "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
              },
              "body": {},
              "Integration_Name": "StrorageAccount",
              "schemaID": "",
              "selectedInputParams": {
                  "api_version": "2017-11-30"
              },
              "selectedPathParams": {
                  "subscriptionId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
              },
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "StorageIngress",
              "name": "StorageIngress",
              "children": [],
              "selectedOutputParams": [
                  "cost",
                  "timespan"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
                  "interval": "PT5M",
                  "metricnames": "Ingress",
                  "aggregation": "total",
                  "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                  "autoadjusttimegrain": true,
                  "validatedimensions": false,
                  "api_version": "2019-07-01"
              },
              "outputParams": [
                  "cost",
                  "timespan",
                  "interval",
                  "value",
                  "namespace",
                  "resourceregion"
              ],
              "PathParams": {
                  "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
              },
              "body": {},
              "Integration_Name": "StrorageAccount",
              "schemaID": "",
              "selectedInputParams": {
                  "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-03-03T07%3A05%3A00.000Z",
                  "interval": "PT5M",
                  "metricnames": "Ingress",
                  "aggregation": "total",
                  "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                  "autoadjusttimegrain": true,
                  "validatedimensions": false,
                  "api_version": "2019-07-01"
              },
              "selectedPathParams": {
                  "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01"
              },
              "selectedBody": {},
              "outPutResponse": "",
              "outputParamsTag": {
                  "cost": "Mobius_PI_total_cost",
                  "timespan": "Mobius_PI_time"
              },
              "indexes": {
                  "cost": "primary",
                  "timespan": "primary"
              }
          },
          {
              "id": "UsedCapacity",
              "name": "UsedCapacity",
              "children": [],
              "selectedOutputParams": [
                  "cost",
                  "timespan"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "timespan": "2000-01-13%2F2024-04-01",
                  "interval": "PT1H",
                  "metricnames": "UsedCapacity",
                  "aggregation": "average",
                  "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                  "validatedimensions": "false",
                  "api-version": "2019-07-01"
              },
              "outputParams": [
                  "cost",
                  "timespan",
                  "interval",
                  "value",
                  "namespace",
                  "resourceregion"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
                  "resourceGroupName": "edo"
              },
              "body": {},
              "Integration_Name": "StrorageAccount",
              "schemaID": "660a986b1574a22f5d1a2074",
              "selectedInputParams": {
                  "timespan": "2000-01-13%2F2024-04-01",
                  "interval": "PT1H",
                  "metricnames": "UsedCapacity",
                  "aggregation": "average",
                  "metricNamespace": "microsoft.storage%2Fstorageaccounts",
                  "validatedimensions": "false",
                  "api-version": "2019-07-01"
              },
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
                  "resourceGroupName": "edo"
              },
              "selectedBody": {},
              "outPutResponse": "660a96c61574a22f5d1a205f",
              "outputParamsTag": {},
              "indexes": {
                  "cost": "primary",
                  "timespan": "primary"
              }
          },
          {
              "id": "GetTablesList",
              "name": "GetTablesList",
              "children": [],
              "selectedOutputParams": [
                  "kind",
                  "totalItems"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "kind",
                  "etag",
                  "tables",
                  "totalItems"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111",
                  "datasetId": "dataset1"
              },
              "body": {},
              "Integration_Name": "BigQueryData",
              "schemaID": "65d7101c1b707d34e937573c",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111",
                  "datasetId": "dataset1"
              },
              "selectedBody": {},
              "outPutResponse": "65cb674c1b707d34e9375023",
              "outputParamsTag": {},
              "indexes": {
                  "kind": "primary",
                  "totalItems": "primary"
              }
          },
          {
              "id": "GetDataSetDetails",
              "name": "GetDataSetDetails",
              "children": [],
              "selectedOutputParams": [
                  "id",
                  "creationTime"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "kind",
                  "etag",
                  "id",
                  "selfLink",
                  "datasetReference",
                  "defaultTableExpirationMs",
                  "access",
                  "creationTime",
                  "lastModifiedTime",
                  "location",
                  "defaultPartitionExpirationMs",
                  "type",
                  "isCaseInsensitive",
                  "maxTimeTravelHours",
                  "storageBillingModel"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111",
                  "datasetId": "dataset1"
              },
              "body": {},
              "Integration_Name": "BigQueryData",
              "schemaID": "6603e7471574a22f5d1a11ee",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111",
                  "datasetId": "dataset1"
              },
              "selectedBody": {},
              "outPutResponse": "65cc59061b707d34e9375158",
              "outputParamsTag": {
                  "id": "Mobius_PI_id",
                  "creationTime": "Mobius_PI_total_cost"
              },
              "indexes": {
                  "id": "primary",
                  "creationTime": "primary"
              }
          },
          {
            "id": "GetDataSetDetails",
            "name": "GetDataSetDetails",
            "children": [],
            "selectedOutputParams": [
                "id",
                "creationTime"
            ],
            "selectedWorkflows": [
                "purge workflow"
            ],
            "description": "API description not found",
            "selected": true,
            "inputParams": {},
            "outputParams": [
                "kind",
                "etag",
                "id",
                "selfLink",
                "datasetReference",
                "defaultTableExpirationMs",
                "access",
                "creationTime",
                "lastModifiedTime",
                "location",
                "defaultPartitionExpirationMs",
                "type",
                "isCaseInsensitive",
                "maxTimeTravelHours",
                "storageBillingModel"
            ],
            "PathParams": {
                "projectId": "magnetic-nimbus-414111",
                "datasetId": "dataset1"
            },
            "body": {},
            "Integration_Name": "BigQuery_Pipeline",
            "schemaID": "6603e7471574a22f5d1a11ee",
            "selectedInputParams": {},
            "selectedPathParams": {
                "projectId": "magnetic-nimbus-414111",
                "datasetId": "dataset1"
            },
            "selectedBody": {},
            "outPutResponse": "65cc59061b707d34e9375158",
            "outputParamsTag": {
                "id": "Mobius_PI_id",
                "creationTime": "Mobius_PI_total_cost"
            },
            "indexes": {
                "id": "primary",
                "creationTime": "primary"
            }
        },
          {
              "id": "CostbyResourceGroupName",
              "name": "CostbyResourceGroupName",
              "children": [],
              "selectedOutputParams": [],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "api_version": "2021-10-01"
              },
              "outputParams": [
                  "Cost",
                  "CostUSD",
                  "UsageDate",
                  "ResourceGroupName",
                  "Currency",
                  "timestamp"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          },
                          "totalCostUSD": {
                              "name": "CostUSD",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "grouping": [
                          {
                              "type": "Dimension",
                              "name": "ResourceGroupName"
                          }
                      ]
                  },
                  "timeframe": "Custom",
                  "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
              },
              "Integration_Name": "AzureCostAnalysis",
              "schemaID": "6606c6711574a22f5d1a1dc2",
              "selectedInputParams": {
                  "api_version": "2021-10-01"
              },
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "selectedBody": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          },
                          "totalCostUSD": {
                              "name": "CostUSD",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "grouping": [
                          {
                              "type": "Dimension",
                              "name": "ResourceGroupName"
                          }
                      ]
                  },
                  "timeframe": "Custom",
                  "timePeriod": "{\"from\":\"2024-02-13T00:00:00+00:00\",\"to\":\"2024-03-14T23:59:59+00:00\"}"
              },
              "outPutResponse": "6606c52b1574a22f5d1a1da5",
              "outputParamsTag": {
                  "CostUSD": "Mobius_PI_total_cost"
              },
              "indexes": {
                  "UsageDate": "primary",
                  "timestamp": "primary"
              }
          },
          {
              "id": "ForecastedCostData",
              "name": "ForecastedCostData",
              "children": [],
              "selectedOutputParams": [
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "api_version": "2021-10-01",
                  "_24top": "5000"
              },
              "outputParams": [
                  "Cost",
                  "UsageDate",
                  "CostStatus",
                  "Currency",
                  "timestamp"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "filter": {
                          "Dimensions": {
                              "Name": "PublisherType",
                              "Operator": "In",
                              "Values": [
                                  "azure"
                              ]
                          }
                      }
                  },
                  "includeActualCost": true,
                  "includeFreshPartialCost": false,
                  "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
              },
              "Integration_Name": "AzureCostAnalysis",
              "schemaID": "6606a7a71574a22f5d1a1ca2",
              "selectedInputParams": {
                  "api_version": "2021-10-01",
                  "_24top": "5000"
              },
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "selectedBody": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "filter": {
                          "Dimensions": {
                              "Name": "PublisherType",
                              "Operator": "In",
                              "Values": [
                                  "azure"
                              ]
                          }
                      }
                  },
                  "includeActualCost": true,
                  "includeFreshPartialCost": false,
                  "timePeriod": "{\"from\":\"2024-02-10T00:00:00+00:00\",\"to\":\"2024-04-30T23:59:59+00:00\"}"
              },
              "outPutResponse": "660699a21574a22f5d1a1c87",
              "outputParamsTag": {
                  "UsageDate": "Mobius_PI_date",
                  "timestamp": "Mobius_PI_time"
              },
              "indexes": {
                  "UsageDate": "primary",
                  "timestamp": "primary"
              }
          },
          {
              "id": "CostbyServiceName",
              "name": "CostbyServiceName",
              "children": [],
              "selectedOutputParams": [
                  "UsageDate",
                  "timestamp"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "api_version": "2021-10-01",
                  "top": "5000"
              },
              "outputParams": [
                  "Cost",
                  "CostUSD",
                  "UsageDate",
                  "ServiceName",
                  "Currency",
                  "timestamp"
              ],
              "PathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "body": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          },
                          "totalCostUSD": {
                              "name": "CostUSD",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "grouping": [
                          {
                              "type": "Dimension",
                              "name": "ServiceName"
                          }
                      ]
                  },
                  "timeframe": "Custom",
                  "timePeriod": {
                      "from": "2024-02-13T00:00:00+00:00",
                      "to": "2024-02-14T23:59:59+00:00"
                  }
              },
              "Integration_Name": "AzureCostAnalysis",
              "schemaID": "660a625b1574a22f5d1a1f20",
              "selectedInputParams": {
                  "api_version": "2021-10-01",
                  "top": "5000"
              },
              "selectedPathParams": {
                  "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
              },
              "selectedBody": {
                  "type": "ActualCost",
                  "dataSet": {
                      "granularity": "Daily",
                      "aggregation": {
                          "totalCost": {
                              "name": "Cost",
                              "function": "Sum"
                          },
                          "totalCostUSD": {
                              "name": "CostUSD",
                              "function": "Sum"
                          }
                      },
                      "sorting": [
                          {
                              "direction": "ascending",
                              "name": "UsageDate"
                          }
                      ],
                      "grouping": [
                          {
                              "type": "Dimension",
                              "name": "ServiceName"
                          }
                      ]
                  },
                  "timeframe": "Custom",
                  "timePeriod": {
                      "from": "2024-02-13T00:00:00+00:00",
                      "to": "2024-02-14T23:59:59+00:00"
                  }
              },
              "outPutResponse": "660a5f4c1574a22f5d1a1f1d",
              "outputParamsTag": {
                  "UsageDate": "Mobius_PI_date",
                  "timestamp": "Mobius_PI_time"
              },
              "indexes": {
                  "UsageDate": "primary",
                  "timestamp": "primary"
              }
          },
          {
              "id": "GetBucketDetails",
              "name": "GetBucketDetails",
              "children": [],
              "selectedOutputParams": [
                  "kind"
              ],
              "selectedWorkflows": [
                  "purge workflow",
                  "ingestion workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "projection": "full",
                  "bucketName": "gaianbucket"
              },
              "outputParams": [
                  "kind",
                  "items"
              ],
              "PathParams": {},
              "body": {},
              "Integration_Name": "CloudStorage",
              "schemaID": "",
              "selectedInputParams": {
                  "projection": "full",
                  "bucketName": "gaianbucket"
              },
              "selectedPathParams": {},
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "Project Storage",
              "name": "Project Storage",
              "children": [],
              "selectedOutputParams": [
                  "timestamp",
                  "total_logical_bytes",
                  "project_id"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "project_id",
                  "total_logical_bytes",
                  "timestamp"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "body": {
                  "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
                  "useLegacySql": "false"
              },
              "Integration_Name": "CloudStorage",
              "schemaID": "660515fe1574a22f5d1a145b",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "selectedBody": {
                  "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
                  "useLegacySql": "false"
              },
              "outPutResponse": "65fbf7b71574a22f5d1a0a82",
              "outputParamsTag": {
                  "project_id": "Mobius_PI_api_call_volume",
                  "total_logical_bytes": "Mobius_PI_storage_growth"
              },
              "indexes": {
                  "timestamp": "primary",
                  "total_logical_bytes": "primary"
              }
          },
          {
              "id": "GetBucketList",
              "name": "GetBucketList",
              "children": [],
              "selectedOutputParams": [
                  "kind",
                  "items"
              ],
              "selectedWorkflows": [
                  "ingestion workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {
                  "project": "magnetic-nimbus-414111",
                  "bucketName": "gaianbucket"
              },
              "outputParams": [
                  "kind",
                  "items"
              ],
              "PathParams": {},
              "body": {},
              "Integration_Name": "CloudStorage",
              "schemaID": "",
              "selectedInputParams": {
                  "project": "magnetic-nimbus-414111",
                  "bucketName": "gaianbucket"
              },
              "selectedPathParams": {},
              "selectedBody": {},
              "outPutResponse": ""
          },
          {
              "id": "Tables Storage",
              "name": "Tables Storage",
              "children": [],
              "selectedOutputParams": [
                  "table_name",
                  "project_id"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "project_id",
                  "project_number",
                  "table_catalog",
                  "table_schema",
                  "table_name",
                  "creation_time",
                  "total_rows",
                  "total_partitions",
                  "total_logical_bytes",
                  "active_logical_bytes",
                  "long_term_logical_bytes",
                  "current_physical_bytes",
                  "total_physical_bytes",
                  "active_physical_bytes",
                  "long_term_physical_bytes",
                  "time_travel_physical_bytes",
                  "storage_last_modified_time",
                  "deleted",
                  "table_type",
                  "fail_safe_physical_bytes",
                  "last_metadata_refresh_time"
              ],
              "PathParams": {
                  "projectId": ""
              },
              "body": {
                  "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
                  "useLegacySql": false
              },
              "Integration_Name": "CloudStorage",
              "schemaID": "6602c6c61574a22f5d1a1007",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": ""
              },
              "selectedBody": {
                  "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
                  "useLegacySql": false
              },
              "outPutResponse": "65fc02571574a22f5d1a0aac",
              "outputParamsTag": {},
              "indexes": {
                  "table_name": "primary",
                  "project_id": "primary"
              }
          },
          {
              "id": "TableStorageUsageTimeLine",
              "name": "TableStorageUsageTimeLine",
              "children": [],
              "selectedOutputParams": [
                  "project_id",
                  "table_name"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "usage_date",
                  "project_id",
                  "table_catalog",
                  "project_number",
                  "table_schema",
                  "table_name",
                  "billable_total_logical_usage",
                  "billable_active_logical_usage",
                  "billable_long_term_logical_usage",
                  "billable_total_physical_usage",
                  "billable_active_physical_usage",
                  "billable_long_term_physical_usage"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "body": {
                  "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
                  "useLegacySql": "false"
              },
              "Integration_Name": "CloudStorage",
              "schemaID": "6602c73b1574a22f5d1a1010",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "selectedBody": {
                  "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
                  "useLegacySql": "false"
              },
              "outPutResponse": "65fd15e11574a22f5d1a0d36",
              "outputParamsTag": {
                  "project_id": "Mobius_PI_id",
                  "table_name": "Mobius_PI_user_id"
              },
              "indexes": {
                  "project_id": "primary",
                  "table_name": "primary"
              }
          },
         
          {
              "id": "DailyProjectCost",
              "name": "DailyProjectCost",
              "children": [],
              "selectedOutputParams": [
             "name"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "kind",
                  "name",
                  "schema",
                  "jobReference",
                  "totalRows",
                  "rows",
                  "totalBytesProcessed",
                  "jobComplete",
                  "cacheHit",
                  "queryId",
                  "jobCreationReason"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "body": {
                  "query": "WITH historical_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR)), YEAR) = DATE('2024-01-01') GROUP BY project_name, service_description, project_labels, invoice_date), forecast_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, AVG(cost) AS avg_cost FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR) BETWEEN TIMESTAMP('2024-01-01') AND TIMESTAMP('2024-04-01') GROUP BY project_name, service_description, project_labels, invoice_date) SELECT h.project_name, h.service_description, h.project_labels, h.invoice_date, SUM(h.total_cost) AS total_cost, h.total_credits, f.avg_cost AS forecasted_cost FROM historical_data h LEFT JOIN forecast_data f ON h.project_name = f.project_name AND h.service_description = f.service_description AND h.project_labels = f.project_labels AND h.invoice_date = f.invoice_date GROUP BY h.project_name, h.service_description, h.project_labels, h.invoice_date, h.total_credits, f.avg_cost ORDER BY h.project_name, h.invoice_date",
                  "useLegacySql": "false"
              },
              "Integration_Name": "Cost Analysis",
              "schemaID": "660befc168ba6066b351fac5",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "selectedBody": {
                  "query": "WITH historical_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR)), YEAR) = DATE('2024-01-01') GROUP BY project_name, service_description, project_labels, invoice_date), forecast_data AS (SELECT project.name AS project_name, service.description AS service_description, TO_JSON_STRING(project.labels) AS project_labels, DATE_TRUNC(DATE(TIMESTAMP_TRUNC(_PARTITIONTIME, DAY)), DAY) AS invoice_date, AVG(cost) AS avg_cost FROM `magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8` WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, YEAR) BETWEEN TIMESTAMP('2024-01-01') AND TIMESTAMP('2024-04-01') GROUP BY project_name, service_description, project_labels, invoice_date) SELECT h.project_name, h.service_description, h.project_labels, h.invoice_date, SUM(h.total_cost) AS total_cost, h.total_credits, f.avg_cost AS forecasted_cost FROM historical_data h LEFT JOIN forecast_data f ON h.project_name = f.project_name AND h.service_description = f.service_description AND h.project_labels = f.project_labels AND h.invoice_date = f.invoice_date GROUP BY h.project_name, h.service_description, h.project_labels, h.invoice_date, h.total_credits, f.avg_cost ORDER BY h.project_name, h.invoice_date",
                  "useLegacySql": "false"
              },
              "outPutResponse": "65f3f0415f353406a916e714",
              "indexes": {
                  "totalBytesProcessed": "primary",
                  "queryId": "primary"
              },
              "outputParamsTag": {
                  "totalBytesProcessed": "Mobius_PI_total_usage",
                  "queryId": "Mobius_PI_id"
              }
          },
          {
              "id": "BillingReport",
              "name": "BillingReport",
              "children": [],
              "selectedOutputParams": [
                  "timestamp",
                  "invoice_date",
                  "total_credits",
                  "name"
                  
              ],
              "selectedWorkflows": [
                  "ingestion workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                "name",
                  "project_name",
                  "service_description",
                  "project_labels",
                  "invoice_date",
                  "total_cost",
                  "total_credits",
                  "forecasted_cost",
                  "timestamp"
              ],
              "PathParams": {
                  "projectId": ""
              },
              "body": {
                  "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
                  "useLegacySql": false
              },
              "Integration_Name": "Cost Analysis",
              "schemaID": "660aae5d1574a22f5d1a2141",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": ""
              },
              "selectedBody": {
                  "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202402' AND usage_start_time BETWEEN TIMESTAMP('1999-02-05') AND TIMESTAMP('2024-02-27')",
                  "useLegacySql": false
              },
              "outPutResponse": "660aac7e1574a22f5d1a2135",
              "outputParamsTag": {
                  "timestamp": "Mobius_PI_time",
                  "invoice_date": "Mobius_PI_date"
              },
              "indexes": {
                  "timestamp": "primary",
                  "invoice_date": "primary",
                  "name":"secondary"
                  
              }
          },
          {
              "id": "GetCostUsage",
              "name": "GetCostUsage",
              "children": [],
              "selectedOutputParams": [
                  "total_cost",
                  "description",
                  "total_credits",
                  "name"
              ],
              "selectedWorkflows": [
                  "purge workflow"
              ],
              "description": "API description not found",
              "selected": true,
              "inputParams": {},
              "outputParams": [
                  "name",
                  "description",
                  "project_labels",
                  "total_cost",
                  "total_credits"
              ],
              "PathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "body": {
                  "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
                  "useLegacySql": "false"
              },
              "Integration_Name": "Cost Analysis",
              "schemaID": "660a99331574a22f5d1a2075",
              "selectedInputParams": {},
              "selectedPathParams": {
                  "projectId": "magnetic-nimbus-414111"
              },
              "selectedBody": {
                  "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = '202401' GROUP BY 1, 2, 3 ORDER BY 1",
                  "useLegacySql": "false"
              },
              "outPutResponse": "65e5bc9228ebd37244d9b2c1",
              "outputParamsTag": {},
              "indexes": {
                  "total_cost": "primary",
                  "description": "primary",
                  "name":"secondary"
              }
          }
      ],
      "id": "TestUser1"
  }
],
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65ccb2ea1b707d34e93751ef/instances/list").reply(200, {
  entities: [
    {
        "integrationName": "CloudStorage",
        "Api_Name": "GetBucketDetails",
        "inputParameters": {
            "projection": "full",
            "bucketName": null
        },
        "PlatformName": "BigQuery",
        "no": 0,
        "outputParameters": 
            {
                "items": [
                    {
                        "bucket": "gaianbucket",
                        "contentType": "application/pdf",
                        "crc32c": "VO8cKg==",
                        "etag": "CNi1ou7Xp4QDEAE=",
                        "generation": "1707805661240024",
                        "id": "gaianbucket/Articulate_English_December-2023-Online.pdf/1707805661240024",
                        "kind": "storage#object",
                        "md5Hash": "itdhN1ReV2SpzI9APgO9eA==",
                        "mediaLink": "https://storage.googleapis.com/download/storage/v1/b/gaianbucket/o/Articulate_English_December-2023-Online.pdf?generation=1707805661240024&alt=media",
                        "metageneration": "1",
                        "name": "Articulate_English_December-2023-Online.pdf",
                        "selfLink": "https://www.googleapis.com/storage/v1/b/gaianbucket/o/Articulate_English_December-2023-Online.pdf",
                        "size": "16619830",
                        "storageClass": "STANDARD",
                        "timeCreated": "2024-02-13T06:27:41.282Z",
                        "timeStorageClassUpdated": "2024-02-13T06:27:41.282Z",
                        "updated": "2024-02-13T06:27:41.282Z"
                    }
                ],
                "kind": "storage#objects"
            }
        ,
        "url": "https://storage.googleapis.com/storage/v1/b",
        "PathParameters": {
            "bucketName": "gaianbucket"
        }
    }
]
});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fbf7b71574a22f5d1a0a82/instances/list").reply(200, {
  entities: [
    {
        "integrationName": "CloudStorage",
        "Api_Name": "Project Storage",
        "PathParameters": {
            "projectId": ""
        },
        "body": {
            "query": "SELECT project_id, SUM(total_logical_bytes) AS total_logical_bytes FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE GROUP BY project_id ORDER BY total_logical_bytes DESC;",
            "useLegacySql": 0
        },
        "no": 1203,
        "outputParameters": {
            "total_logical_bytes": 11003296,
            "project_id": "magnetic-nimbus-414111",
            "timestamp": 20
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries"
    }
]


});

//   anlytial jobs..........................................................

// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65532198a5cb97115f849240/instances/list").reply(200, {
//   entities: [
//     {
//         "analyticsStyleName": "Costs Appropriation",
//         "analyticsStyleDescription": "Analyzing costs associated with BigQuery usage.",
//         "createdBy": "saleem",
//         "collectionOfAQs": [
//             "6560793540eb1835fe4d05de",
//             "65607e8e40eb1835fe4d05ee",
//             "656069f659570d3e1663ddd4"
//         ],
//         "createdOn": "2024-03-15T05:39:53.005Z",
//         "id": "2024-03-15T05:39:53.005Z"
//     },
//     {
//         "analyticsStyleName": "API Utilization",
//         "analyticsStyleDescription": "Tracking API calls made to BigQuery",
//         "createdBy": "sravan",
//         "collectionOfAQs": [
//             "655eddbc7c8ba57caa378308"
//         ],
//         "createdOn": "2024-03-14T05:39:10.038Z",
//         "id": "2024-03-14T05:39:10.039Z"
//     },
//     {
//         "analyticsStyleName": "Storage Consumption",
//         "analyticsStyleDescription": " BigQuery storage usage analysis",
//         "createdBy": "sowmya",
//         "collectionOfAQs": [
//             "65658aec367e4160070e86f9",
//             "65604b6059570d3e1663dd8f"
          
//         ],
//         "createdOn": "2024-03-14T05:38:07.593Z",
//         "id": "2024-03-14T05:38:07.593Z"
//     },
//     {
//         "analyticsStyleName": "Product Categorization",
//         "analyticsStyleDescription": "Categorizing BigQuery products and services usage.",
//         "createdBy": "saleem",
//         "collectionOfAQs": [
//             "655eddbc7c8ba57caa378308"
//         ],
//         "createdOn": "2023-11-19T13:36:31.598Z",
//         "id": "2023-11-19T13:36:31.598Z"
//     },
//     {
//       "analyticsStyleName": "Budgetary Distribution",
//       "analyticsStyleDescription": "Planning budgets for Azure usage.",
//       "createdBy": "saleem",
//       "collectionOfAQs": [
//           "655eddbc7c8ba57caa378308"
//       ],
//       "createdOn": "2023-10-19T13:36:31.598Z",
//       "id": "2023-10-19T13:36:31.598Z"
//   }
// ]

// });



mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65532198a5cb97115f849240/instances/list").reply(200, {
    entities: [
      {
          "analyticsStyleName": "Yield Estimation",
          "analyticsStyleDescription": "Yield Estimation forecasts the amount of crop based on historical data.",
          "createdBy": "Kushal",
          "collectionOfAQs": [
              "66b1edc3311fa40776ef57eb",
              "66b1f9edb7ea59463e796644",
              "66b205e3b7ea59463e796645",
              "66b20773b7ea59463e796646",
              "66b2095eb7ea59463e796647",
              "66b209fcb7ea59463e796648",
              "66b20a59311fa40776ef57ec",
              "66b20fbfb7ea59463e79664b",
              "66b21045311fa40776ef57ee"
                  ],
          "createdOn": "2024-08-06T17:00:00.000Z",
          "id": "2024-08-06T17:00:00.000Z"
      },
      {
          "analyticsStyleName": "Moisture Content",
          "analyticsStyleDescription": "Moisture content refers to the amount of water present in soil",
          "createdBy": "Eswar",
          "collectionOfAQs": [
              "66b2109cb7ea59463e79664c"
          ],
          "createdOn": "2024-08-06T18:00:00.000Z",
          "id": "2024-08-06T18:00:00.000Z"
      },
      {
          "analyticsStyleName": "Average Land Size",
          "analyticsStyleDescription": "Average Land Size refers to the amount of land for specific crop",
          "createdBy": "Sudharshan",
          "collectionOfAQs": [
              "66b210df311fa40776ef57ef"          
          ],
          "createdOn": "2024-08-06T19:00:00.000Z",
          "id": "2024-08-06T19:00:00.000Z"
      },
      {
          "analyticsStyleName": "YoY Yield Growth by Crop Type",
          "analyticsStyleDescription": "Year-over-year yield growth rates for different types of crops.",
          "createdBy": "Kushal",
          "collectionOfAQs": [
              "66b21178311fa40776ef57f1",
              "66b211e3311fa40776ef57f2"
          ],
          "createdOn": "2024-08-06T20:30:00.000Z",
          "id": "2024-08-06T20:45:00.000Z"
      }
  ]
  
})
  


mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9ed468ba6066b351fa84/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
            "projectId": "magnetic-nimbus-414111"
        },
        "body": {
            "query": "SELECT * FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = `202402` AND usage_start_time BETWEEN TIMESTAMP(`1999-02-05`) AND TIMESTAMP(`2024-02-27`)",
            "useLegacySql": 0
        },
        "outputParameters": {
            "name": "My First Project",
            "description": "Cloud Logging",
            "daily_credits": 0,
            "invoice_date": "2024-02-12",
            "timestamp": 1711973500000,
            "daily_cost_inr": 0,
            "total_credits":60
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "Cost Analysis",
        "Api_Name": "BillingReport",
        "no": 1203
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9f9e68ba6066b351fa85/instances/list").reply(200, {
  entities:  [
    {
        "integrationName": "Cost Analysis",
        "Api_Name": "GetCostUsage",
        "PathParameters": {
            "projectId": "magnetic-nimbus-414111"
        },
        "body": {
            "query": "SELECT project.name, service.description, TO_JSON_STRING(project.labels) AS project_labels, SUM(cost) AS total_cost, COALESCE(SUM((SELECT SUM(c.amount) FROM UNNEST(credits) c)), 0) AS total_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE invoice.month = `202401` GROUP BY 1, 2, 3 ORDER BY 1",
            "useLegacySql": 0
        },
        "outputParameters": {
            "project_labels": [],
            "name": "saleem",
            "description": "Invoice",
            "total_cost": 0,
            "total_credits": 0
        },
        "no": 1203,
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries"
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660ba09468ba6066b351fa86/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
            "projectId": "magnetic-nimbus-414111"
        },
        "body": {
            "query": "WITH Currency_Conversion AS (SELECT currency_conversion_rate FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE TIMESTAMP_TRUNC(_PARTITIONTIME, DAY) = TIMESTAMP(`2024-03-15`) LIMIT 1) SELECT DATE(_PARTITIONTIME) as invoice_date, project.name, service.description, cost * (SELECT currency_conversion_rate FROM Currency_Conversion) as daily_cost_inr, COALESCE((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0) as daily_credits FROM magnetic-nimbus-414111.dataset1.gcp_billing_export_v1_012815_891010_F6E9D8 WHERE _PARTITIONTIME BETWEEN TIMESTAMP(`2024-01-01`) AND TIMESTAMP(`2024-03-15`) ORDER BY invoice_date, project.name, service.description",
            "useLegacySql": 0
        },
        "outputParameters": {
            "name": "My First Project",
            "description": "Cloud Logging",
            "daily_credits": 0,
            "invoice_date": "2024-02-12",
            "timestamp": 1711980400000,
            "daily_cost_inr": 0
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "Cost Analysis",
        "Api_Name": "DailyProjectCost",
        "no": 1203
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f7ec7f5d1ff73e68ddad50/instances/list").reply(200, {
  entities: [
    {
        "Api_Name": "GetTablesList",
        "PathParameters": {
            "projectId": "my-new-project-4-412310",
            "datasetId": "bquxjob_9d50c95_18d5eeb9a75"
        },
        "no": 96,
        "outputParameters": {
            "etag": "WV9Ty1RBi/N51Mr0mD5k/A==",
            "kind": "bigquery#tableList",
            "tables": [
                {
                    "creationTime": "1706693716036",
                    "expirationTime": "1711877716036",
                    "id": "my-new-project-4-412310:dataset4.table1",
                    "kind": "bigquery#table",
                    "tableReference": {
                        "datasetId": "dataset4",
                        "projectId": "my-new-project-4-412310",
                        "tableId": "table1"
                    },
                    "type": "TABLE"
                }
            ]
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/{{YOUR_PROJECT_ID}}/datasets/{{YOUR_DATASET_ID}}/tables"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f81d64b9ae611185f27eeb/instances/list").reply(200, {
  entities: [
    {
        "integrationName": "CloudStorage",
        "Api_Name": "GetBucketList",
        "PlatformName": "BigQuery",
        "no": 1,
        "inputParameters": {
            "project": "magnetic-nimbus-414111",
            "bucketName": "gaianbucket"
        },
        "outputParameters": 
            {
                "items": [
                    {
                        "etag": "CAE=",
                        "iamConfiguration.bucketPolicyOnly.enabled": true,
                        "iamConfiguration.bucketPolicyOnly.lockedTime": "2024-05-12T12:22:19.882Z",
                        "iamConfiguration.publicAccessPrevention": "enforced",
                        "iamConfiguration.uniformBucketLevelAccess.enabled": true,
                        "iamConfiguration.uniformBucketLevelAccess.lockedTime": "2024-05-12T12:22:19.882Z",
                        "id": "gaianbucket",
                        "kind": "storage#bucket",
                        "location": "US",
                        "locationType": "multi-region",
                        "metageneration": "1",
                        "name": "gaianbucket",
                        "projectNumber": "765420653814",
                        "rpo": "DEFAULT",
                        "selfLink": "https://www.googleapis.com/storage/v1/b/gaianbucket",
                        "storageClass": "STANDARD",
                        "timeCreated": "2024-02-12T12:22:19.882Z",
                        "updated": "2024-02-12T12:22:19.882Z"
                    }
                ],
                "kind": "storage#buckets"
            },
        "url": "https://storage.googleapis.com/storage/v1/b"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660abb1605c9541234bceb02/instances/list").reply(200, {
  entities: [{
        "PathParameters": {
            "projectId": "magnetic-nimbus-414111"
        },
        "outputParameters": {
            "active_physical_bytes": 29495544,
            "table_name": "cloud_pricing_export",
            "storage_last_modified_time": 1710839060.384,
            "long_term_physical_bytes": 0,
            "total_physical_bytes": 29495544,
            "project_number": 765420653814,
            "table_type": "BASE TABLE",
            "total_rows": 1207790,
            "fail_safe_physical_bytes": 0,
            "time_travel_physical_bytes": 0,
            "table_schema": "dataset1",
            "total_partitions": 22,
            "active_logical_bytes": 483596114,
            "table_catalog": "magnetic-nimbus-414111",
            "creation_time": 1709033107.857,
            "last_metadata_refresh_time": 1710839075.61,
            "project_id": "magnetic-nimbus-414111",
            "long_term_logical_bytes": 0,
            "current_physical_bytes": 29495544,
            "deleted": false,
            "total_logical_bytes": 483596114
        },
        "Api_Name": "Tables Storage",
        "body": {
            "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE",
            "useLegacySql": 0
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "CloudStorage",
        "no": 1203
    }
]

});


mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660b9d5068ba6066b351fa83/instances/list").reply(200, {
  entities: [
    {
        "outputParameters": {
            "table_schema": "dataset1",
            "usage_date": "2024-02-24",
            "billable_long_term_logical_usage": 0,
            "table_name": "gcp_billing_export_resource_v1_012815_891010_F6E9D8",
            "billable_total_logical_usage": 49468,
            "table_catalog": "magnetic-nimbus-414111",
            "billable_active_logical_usage": 49468,
            "project_id": "magnetic-nimbus-414111",
            "billable_active_physical_usage": 0,
            "project_number": 765420653814,
            "billable_total_physical_usage": 0,
            "billable_long_term_physical_usage": 0
        },
        "PathParameters": {
            "projectId": "magnetic-nimbus-414111"
        },
        "body": {
            "query": "SELECT * FROM region-us.INFORMATION_SCHEMA.TABLE_STORAGE_USAGE_TIMELINE;",
            "useLegacySql": 0
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "CloudStorage",
        "Api_Name": "TableStorageUsageTimeLine",
        "no": 1203
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f8101dec18e4223f021f26/instances/list").reply(200, {
  entities: [ {
    "Api_Name": "GetDataSetDetails",
    "PathParameters": {
        "projectId": "my-new-project-4-412310",
        "datasetId": "dataset4"
    },
    "no": 129,
    "outputParameters": 
        {
            "access": [
                {
                    "role": "WRITER",
                    "specialGroup": "projectWriters"
                },
                {
                    "role": "OWNER",
                    "specialGroup": "projectOwners"
                },
                {
                    "role": "OWNER",
                    "userByEmail": "aravind.kumar@gaiansolutions.com"
                },
                {
                    "role": "READER",
                    "specialGroup": "projectReaders"
                },
                {
                    "role": "roles/bigquery.metadataViewer",
                    "userByEmail": "saikiran.gadupathi@gaiansolutions.com"
                }
            ],
            "creationTime": "1706523893837",
            "datasetReference.datasetId": "dataset4",
            "datasetReference.projectId": "my-new-project-4-412310",
            "defaultPartitionExpirationMs": "5184000000",
            "defaultTableExpirationMs": "5184000000",
            "etag": "Rcvs3NKRDgvflwxuWhXReQ==",
            "id": "my-new-project-4-412310:dataset4",
            "isCaseInsensitive": false,
            "kind": "bigquery#dataset",
            "lastModifiedTime": "1706866112804",
            "location": "US",
            "maxTimeTravelHours": "168",
            "selfLink": "https://bigquery.googleapis.com/bigquery/v2/projects/my-new-project-4-412310/datasets/dataset4",
            "storageBillingModel": "LOGICAL",
            "type": "DEFAULT"
        }
    ,
    "url": "https://bigquery.googleapis.com/bigquery/v2/projects/my-new-project-4-412310/datasets/dataset4"
}]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660ab21605c9541234bceb00/instances/list").reply(200, {
  entities: []

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/660c1f1022f94a0e93b3de0f/instances/list").reply(200, {
  entities: [ {
    "inputParameters": {
        "start_date": "2024-02-01",
        "end_date": "2024-03-01"
    },
    "outputParameters": {
        "n_generated_tokens_total": 76807,
        "api_key_redacted": "sk-...ryV",
        "n_context_tokens_total": 1340855,
        "n_requests": 228,
        "aggregation_timestamp": 1706745600,
        "snapshot_id": "gpt-4-1106-preview",
        "organization_name": "Gaian Solutions",
        "api_key_name": "Mobius ChatBot",
        "api_key_id": "key_eZSU7v27DnYN6zz7",
        "organization_id": "org-IAoQZTAKQtDQTRpYmFHb9zk6",
        "user_id": "apps@gaiansolutions.com",
        "operation": "completion"
    },
    "PlatformName": "OPEN AI",
    "url": "https://api.openai.com/v1/dashboard/activity",
    "integrationName": "Usage",
    "Api_Name": "OpenAI_Activities"
}]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d2f9a61b707d34e93754cf/instances/list").reply(200, {
  entities:[
    {
        "url": "https://dev-69282603-admin.okta.com/api/v1/apps",
        "Api_Name": "ApplicationOperations",
        "PlatformName": "OKTA",
        "integrationName": "ApplicationOperations",
        "no": 20.36,
        "PathParameters": {
            "domain": "dev-69282603-admin.okta.com"
        },
        "inputParameters": {},
        "body": {},
        "outputParameters": {
            "id": "0oaf89o8vnVWAyzlu5d7",
            "name": "saasure",
            "label": "Okta Admin Console",
            "status": "ACTIVE",
            "lastUpdated": "2024-02-19T03:45:14.000Z",
            "created": "2024-02-19T03:45:13.000Z",
            "accessibility": {
                "selfService": false,
                "errorRedirectUrl": null,
                "loginRedirectUrl": null
            },
            "visibility": {
                "autoSubmitToolbar": false,
                "hide": {
                    "iOS": false,
                    "web": false
                },
                "appLinks": {
                    "admin": true
                }
            },
            "features": [],
            "signOnMode": "OPENID_CONNECT",
            "credentials": {
                "userNameTemplate": {
                    "template": "${source.login}",
                    "type": "BUILT_IN"
                },
                "signing": {
                    "kid": "4ioSMVQ1PDaBJSepy_xbnC83SlUawRjpHSyye01WMYU"
                }
            },
            "settings": {
                "app": {},
                "notifications": {
                    "vpn": {
                        "network": {
                            "connection": "DISABLED"
                        },
                        "message": null,
                        "helpUrl": null
                    }
                },
                "manualProvisioning": false,
                "implicitAssignment": false
            },
            "_links": {
                "uploadLogo": {
                    "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/logo",
                    "hints": {
                        "allow": [
                            "POST"
                        ]
                    }
                },
                "appLinks": [
                    {
                        "name": "admin",
                        "href": "https://dev-69282603.okta.com/home/saasure/0oaf89o8vnVWAyzlu5d7/2",
                        "type": "text/html"
                    }
                ],
                "profileEnrollment": {
                    "href": "https://dev-69282603.okta.com/api/v1/policies/rstf8ampppe6B98Ct5d7"
                },
                "policies": {
                    "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/policies",
                    "hints": {
                        "allow": [
                            "PUT"
                        ]
                    }
                },
                "groups": {
                    "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/groups"
                },
                "logo": [
                    {
                        "name": "medium",
                        "href": "https://ok12static.oktacdn.com/assets/img/logos/okta_admin_app.da3325676d57eaf566cb786dd0c7a819.png",
                        "type": "image/png"
                    }
                ],
                "accessPolicy": {
                    "href": "https://dev-69282603.okta.com/api/v1/policies/rstf8ak7dnRy2qeA95d7"
                },
                "users": {
                    "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/users"
                },
                "deactivate": {
                    "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf89o8vnVWAyzlu5d7/lifecycle/deactivate"
                }
            }
        },
        "id": "20.36"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d302ef1b707d34e9375517/instances/list").reply(200, {
  entities:[
    {
        "url": "https://dev-69282603-admin.okta.com/api/v1/apps/{{app_id}}/users",
        "Api_Name": "Application_Users",
        "PlatformName": "OKTA",
        "integrationName": "Log Activities",
        "no": 20.36,
        "PathParameters": {
            "app_id": "0oaf8annb5fGMKk9A5d7"
        },
        "inputParameters": {},
        "body": {},
        "outputParameters": 
            {
                "id": "00uf89rtxeXdVF5DC5d7",
                "externalId": null,
                "created": "2024-02-19T05:39:01.000Z",
                "lastUpdated": "2024-02-19T05:39:01.000Z",
                "scope": "USER",
                "status": "ACTIVE",
                "statusChanged": "2024-02-19T05:39:01.000Z",
                "passwordChanged": null,
                "syncState": "DISABLED",
                "credentials": {
                    "userName": "saikirangaduparthi999@gmail.com"
                },
                "profile": {},
                "_links": {
                    "app": {
                        "href": "https://dev-69282603.okta.com/api/v1/apps/0oaf8annb5fGMKk9A5d7"
                    },
                    "user": {
                        "href": "https://dev-69282603.okta.com/api/v1/users/00uf89rtxeXdVF5DC5d7"
                    }
                }
            }
        ,
        "id": "20.36"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d2f6c11b707d34e93754c1/instances/list").reply(200, {
  entities:[
    {
        "url": "https://dev-69282603-admin.okta.com/api/v1/logs",
        "Api_Name": "SystemLogs",
        "PlatformName": "OKTA",
        "integrationName": "LogActivities",
        "no": 20.36,
        "PathParameters": {
            "domain": "dev-69282603-admin.okta.com"
        },
        "inputParameters": {
            "since": "",
            "q": ""
        },
        "body": {},
        "outputParameters": {
            "actor": {
                "id": "00u4exiwtOxp3yrE35d5",
                "type": "User",
                "alternateId": "web@okta.com",
                "displayName": "Developer Free",
                "detailEntry": null
            },
            "client": {
                "userAgent": {
                    "rawUserAgent": "Java/11.0.21",
                    "os": "Unknown",
                    "browser": "UNKNOWN"
                },
                "zone": "OFF_NETWORK",
                "device": "Unknown",
                "id": "capfx6SYTRNSWSMAOWNS",
                "ipAddress": "34.202.149.224",
                "geographicalContext": {
                    "city": "Ashburn",
                    "state": "Virginia",
                    "country": "United States",
                    "postalCode": "20149",
                    "geolocation": {
                        "lat": 39.0469,
                        "lon": -77.4903
                    }
                }
            },
            "device": null,
            "authenticationContext": {
                "authenticationProvider": null,
                "credentialProvider": null,
                "credentialType": null,
                "issuer": null,
                "interface": null,
                "authenticationStep": 0,
                "externalSessionId": "trsXKaTa22eS_yqwjHQB80hIA"
            },
            "displayMessage": "Update application",
            "eventType": "application.lifecycle.update",
            "outcome": {
                "result": "SUCCESS",
                "reason": null
            },
            "published": "2024-02-19T03:45:13.410Z",
            "securityContext": {
                "asNumber": 14618,
                "asOrg": "amazon technologies inc.",
                "isp": "amazon.com  inc.",
                "domain": "amazonaws.com",
                "isProxy": false
            },
            "severity": "INFO",
            "debugContext": {
                "debugData": {
                    "requestId": "476e4b20c4007c72065912e23b75fbdc,476e4b2",
                    "dtHash": "87dc6f728f249625ca06ca9409040a8a00bdc5d0d33a33b77d8f78da3aeb512c",
                    "requestUri": "/api/internal/orgs",
                    "url": "/api/internal/orgs?"
                }
            },
            "legacyEventType": "app.generic.config.app_updated",
            "transaction": {
                "type": "WEB",
                "id": "476e4b20c4007c72065912e23b75fbdc,476e4b2",
                "detail": {
                    "requestApiTokenId": "00T1oxy461N1e3s3h5d7"
                }
            },
            "uuid": "49a8fa82-ced9-11ee-9817-67b085579cf3",
            "version": "0",
            "request": {
                "ipChain": [
                    {
                        "ip": "34.202.149.224",
                        "geographicalContext": {
                            "city": "Ashburn",
                            "state": "Virginia",
                            "country": "United States",
                            "postalCode": "20149",
                            "geolocation": {
                                "lat": 39.0469,
                                "lon": -77.4903
                            }
                        },
                        "version": "V4",
                        "source": null
                    }
                ]
            },
            "target": [
                {
                    "id": "0oaf89o8vnVWAyzlu5d7",
                    "type": "AppInstance",
                    "alternateId": "Okta Admin Console",
                    "displayName": "Okta Admin Console",
                    "detailEntry": null
                }
            ]
        },
        "id": "20.36"
    }
]

});


mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1a121574a22f5d1a0d4f/instances/list").reply(200, {
  entities:[
    {
        "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
        "Api_Name": "Snowflake_Account_Usage",
        "integrationName": "Account Usage",
        "no": 1203.9,
        "PathParameters": {
            "domain": ""
        },
        "inputParameters": {},
        "body": {
            "statement": [
                {
                    "name": "ACCESS_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY"
                },
                {
                    "name": "AGGREGATE_QUERY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATE_QUERY_HISTORY"
                },
                {
                    "name": "AGGREGATION_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AGGREGATION_POLICIES"
                },
                {
                    "name": "ALERT_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ALERT_HISTORY"
                },
                {
                    "name": "AUTOMATIC_CLUSTERING_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
                },
                {
                    "name": "CLASSES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASSES"
                },
                {
                    "name": "CLASS_INSTANCES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.CLASS_INSTANCES"
                },
                {
                    "name": "COLUMNS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COLUMNS"
                },
                {
                    "name": "COMPLETE_TASK_GRAPHS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COMPLETE_TASK_GRAPHS"
                },
                {
                    "name": "COPY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY"
                },
                {
                    "name": "DATABASES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASES"
                },
                {
                    "name": "DATABASE_REPLICATION_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_REPLICATION_USAGE_HISTORY"
                },
                {
                    "name": "DATABASE_STORAGE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
                },
                {
                    "name": "DATA_CLASSIFICATION_LATEST",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST"
                },
                {
                    "name": "DATA_QUALITY_MONITORING_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_QUALITY_MONITORING_USAGE_HISTORY"
                },
                {
                    "name": "DATA_TRANSFER_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.DATA_TRANSFER_HISTORY"
                },
                {
                    "name": "ELEMENT_TYPES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ELEMENT_TYPES"
                },
                {
                    "name": "EVENT_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EVENT_USAGE_HISTORY"
                },
                {
                    "name": "EXTERNAL_ACCESS_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.EXTERNAL_ACCESS_HISTORY"
                },
                {
                    "name": "FIELDS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FIELDS"
                },
                {
                    "name": "FILE_FORMATS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.FILE_FORMATS"
                },
                {
                    "name": "GRANTS_TO_ROLES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_ROLES"
                },
                {
                    "name": "GRANTS_TO_USERS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_USERS"
                },
                {
                    "name": "HYBRID_TABLE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.HYBRID_TABLE_USAGE_HISTORY"
                },
                {
                    "name": "LOAD_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOAD_HISTORY"
                },
                {
                    "name": "LOCK_WAIT_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOCK_WAIT_HISTORY"
                },
                {
                    "name": "LOGIN_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY"
                },
                {
                    "name": "MASKING_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MASKING_POLICIES"
                },
                {
                    "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
                },
                {
                    "name": "METERING_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_DAILY_HISTORY"
                },
                {
                    "name": "METERING_HISTORY                ",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.METERING_HISTORY"
                },
                {
                    "name": "NETWORK_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_POLICIES"
                },
                {
                    "name": "NETWORK_RULES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULES"
                },
                {
                    "name": "NETWORK_RULE_REFERENCES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.NETWORK_RULE_REFERENCES"
                },
                {
                    "name": "OBJECT_DEPENDENCIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.OBJECT_DEPENDENCIES"
                },
                {
                    "name": "PASSWORD_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PASSWORD_POLICIES"
                },
                {
                    "name": "PIPES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPES"
                },
                {
                    "name": "PIPE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PIPE_USAGE_HISTORY"
                },
                {
                    "name": "POLICY_REFERENCES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.POLICY_REFERENCES"
                },
                {
                    "name": "PROCEDURES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROCEDURES"
                },
                {
                    "name": "PROJECTION_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.PROJECTION_POLICIES"
                },
                {
                    "name": "QUERY_ACCELERATION_ELIGIBLE",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_ACCELERATION_ELIGIBLE"
                },
                {
                    "name": "QUERY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY"
                },
                {
                    "name": "REFERENTIAL_CONSTRAINTS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REFERENTIAL_CONSTRAINTS"
                },
                {
                    "name": "REPLICATION_GROUP_REFRESH_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
                },
                {
                    "name": "REPLICATION_GROUP_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
                },
                {
                    "name": "REPLICATION_GROUP_REFRESH_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_GROUP_REFRESH_HISTORY"
                },
                {
                    "name": "REPLICATION_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.REPLICATION_USAGE_HISTORY"
                },
                {
                    "name": "ROLES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROLES"
                },
                {
                    "name": "ROW_ACCESS_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.ROW_ACCESS_POLICIES"
                },
                {
                    "name": "SCHEMATA",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SCHEMATA"
                },
                {
                    "name": "SEARCH_OPTIMIZATION_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SEARCH_OPTIMIZATION_HISTORY"
                },
                {
                    "name": "SERVICES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SERVICES"
                },
                {
                    "name": "SESSIONS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSIONS"
                },
                {
                    "name": "SESSION_POLICIES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SESSION_POLICIES"
                },
                {
                    "name": "SNOWPARK_CONTAINER_SERVICES_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPARK_CONTAINER_SERVICES_HISTORY"
                },
                {
                    "name": "SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_FILE_MIGRATION_HISTORY"
                },
                {
                    "name": "SNOWPIPE_STREAMING_CLIENT_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.SNOWPIPE_STREAMING_CLIENT_HISTORY"
                },
                {
                    "name": "STAGES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STAGES"
                },
                {
                    "name": "STORAGE_USAGE",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.STORAGE_USAGE"
                },
                {
                    "name": "TABLES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLES"
                },
                {
                    "name": "TABLE_CONSTRAINTS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_CONSTRAINTS"
                },
                {
                    "name": "TABLE_STORAGE_METRICS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS"
                },
                {
                    "name": "TAGS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAGS"
                },
                {
                    "name": "TAG_REFERENCES",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES"
                },
                {
                    "name": "TASK_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY"
                },
                {
                    "name": "TASK_VERSIONS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.TASK_VERSIONS"
                },
                {
                    "name": "USERS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.USERS"
                },
                {
                    "name": "VIEWS",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.VIEWS"
                },
                {
                    "name": "WAREHOUSE_EVENTS_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_EVENTS_HISTORY"
                },
                {
                    "name": "WAREHOUSE_LOAD_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_LOAD_HISTORY"
                },
                {
                    "name": "WAREHOUSE_METERING_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY"
                }
            ]
        },
        "outputParameters": {
            "USAGE_DATE": "19769",
            "STORAGE_BYTES": "0.000000",
            "STAGE_BYTES": "2871.000000",
            "FAILSAFE_BYTES": "0.000000",
            "HYBRID_TABLE_STORAGE_BYTES": "0.000000"
        },
        "id": "1203.9"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1b231574a22f5d1a0d5c/instances/list").reply(200, {
  entities:[
    {
        "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
        "Api_Name": "Snowflake_Organization_Usage",
        "integrationName": "Organization Usage",
        "no": 1203.9,
        "PathParameters": {
            "domain": ""
        },
        "inputParameters": {},
        "body": {
            "statement": [
                {
                    "name": "ACCOUNTS",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
                },
                {
                    "name": "AUTOMATIC_CLUSTERING_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
                },
                {
                    "name": "CONTRACT_ITEMS",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.CONTRACT_ITEMS"
                },
                {
                    "name": "DATABASE_STORAGE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
                },
                {
                    "name": "DATA_TRANSFER_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
                },
                {
                    "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
                },
                {
                    "name": "MARKETPLACE_DISBURSEMENT_REPORT",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
                },
                {
                    "name": "MARKETPLACE_PAID_USAGE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
                },
                {
                    "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
                },
                {
                    "name": "MATERIALIZED_VIEW_REFRESH_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY"
                },
                {
                    "name": "METERING_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.METERING_DAILY_HISTORY"
                },
                {
                    "name": "MONETIZED_USAGE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.MONETIZED_USAGE_DAILY"
                },
                {
                    "name": "PIPE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PIPE_USAGE_HISTORY"
                },
                {
                    "name": "PREVIEW_CONTRACT_ITEMS",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_CONTRACT_ITEMS"
                },
                {
                    "name": "PREVIEW_DATA_TRANSFER_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_DATA_TRANSFER_DAILY_HISTORY"
                },
                {
                    "name": "PREVIEW_METERING_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_METERING_DAILY_HISTORY"
                },
                {
                    "name": "PREVIEW_RATE_SHEET_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
                },
                {
                    "name": "PREVIEW_REMAINING_BALANCE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
                },
                {
                    "name": "PREVIEW_STORAGE_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_STORAGE_DAILY_HISTORY"
                },
                {
                    "name": "PREVIEW_USAGE_IN_CURRENCY_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_USAGE_IN_CURRENCY_DAILY"
                },
                {
                    "name": "QUERY_ACCELERATION_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.QUERY_ACCELERATION_HISTORY"
                },
                {
                    "name": "RATE_SHEET_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
                },
                {
                    "name": "REMAINING_BALANCE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
                },
                {
                    "name": "REPLICATION_GROUP_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
                },
                {
                    "name": "REPLICATION_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
                },
                {
                    "name": "SEARCH_OPTIMIZATION_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
                },
                {
                    "name": "STAGE_STORAGE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
                },
                {
                    "name": "STORAGE_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STORAGE_DAILY_HISTORY"
                },
                {
                    "name": "USAGE_IN_CURRENCY_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY"
                },
                {
                    "name": "WAREHOUSE_METERING_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY"
                }
            ]
        },
        "outputParameters":  {
"ORGANIZATION_NAME": "AXOIIHB",
"CONTRACT_NUMBER": "207684",
"ACCOUNT_NAME": "OF84409",
"ACCOUNT_LOCATOR": "SJ62485",
"REGION": "AZURE_CENTRALINDIA",
"SERVICE_LEVEL": "Standard",
"USAGE_DATE": "19802",
"USAGE_TYPE": "overage-serverless tasks",
"USAGE": "0.003",
"CURRENCY": "USD",
"USAGE_IN_CURRENCY": "0.01",
"BALANCE_SOURCE": "Overage",
"BILLING_TYPE": "CONSUMPTION",
"RATING_TYPE": "COMPUTE",
"SERVICE_TYPE": "SERVERLESS_TASK",
"IS_ADJUSTMENT": "false"
},
        "id": "1203.9"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65fd1b231574a22f5d1a0p4c/instances/list").reply(200, {
  entities:[
    {
        "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
        "Api_Name": "Snowflake Organization Usage",
        "integrationName": "Snowflake_Pipeline",
        "no": 1203.9,
        "PathParameters": {
            "domain": ""
        },
        "inputParameters": {},
        "body": {
            "statement": [
                {
                    "name": "ACCOUNTS",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.ACCOUNTS"
                },
                {
                    "name": "AUTOMATIC_CLUSTERING_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.AUTOMATIC_CLUSTERING_HISTORY"
                },
                {
                    "name": "DATABASE_STORAGE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATABASE_STORAGE_USAGE_HISTORY"
                },
                {
                    "name": "DATA_TRANSFER_DAILY_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.DATA_TRANSFER_DAILY_HISTORY"
                },
                {
                    "name": "LISTING_AUTO_FULFILLMENT_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.LISTING_AUTO_FULFILLMENT_USAGE_HISTORY"
                },
                {
                    "name": "PREVIEW_RATE_SHEET_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_RATE_SHEET_DAILY"
                },
                {
                    "name": "PREVIEW_REMAINING_BALANCE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.PREVIEW_REMAINING_BALANCE_DAILY"
                },
                {
                    "name": "RATE_SHEET_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.RATE_SHEET_DAILY"
                },
                {
                    "name": "REMAINING_BALANCE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REMAINING_BALANCE_DAILY"
                },
                {
                    "name": "REPLICATION_GROUP_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_GROUP_USAGE_HISTORY"
                },
                {
                    "name": "REPLICATION_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.REPLICATION_USAGE_HISTORY"
                },
                {
                    "name": "SEARCH_OPTIMIZATION_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.SEARCH_OPTIMIZATION_HISTORY"
                },
                {
                    "name": "STAGE_STORAGE_USAGE_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.ORGANIZATION_USAGE.STAGE_STORAGE_USAGE_HISTORY"
                }
            ]
        },
        "outputParameters":  {
"ORGANIZATION_NAME": "AXOIIHB",
"CONTRACT_NUMBER": "207684",
"ACCOUNT_NAME": "OF84409",
"ACCOUNT_LOCATOR": "SJ62485",
"REGION": "AZURE_CENTRALINDIA",
"SERVICE_LEVEL": "Standard",
"USAGE_DATE": "19802",
"USAGE_TYPE": "overage-serverless tasks",
"USAGE": "0.003",
"CURRENCY": "USD",
"USAGE_IN_CURRENCY": "0.01",
"BALANCE_SOURCE": "Overage",
"BILLING_TYPE": "CONSUMPTION",
"RATING_TYPE": "COMPUTE",
"SERVICE_TYPE": "SERVERLESS_TASK",
"IS_ADJUSTMENT": "false"
},
        "id": "1203.9"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65dc619b1b707d34e937b8be/instances/list").reply(200, {
  entities:[
    {
        "url": "https://axoiihb-of84409.snowflakecomputing.com/api/v2/statements",
        "Api_Name": "Snowflake DATA SHARING USAGE",
        "integrationName": "DATA SHARING USAGE",
        "no": 1203.9,
        "PathParameters": {
            "domain": ""
        },
        "inputParameters": {},
        "body": {
            "statement": [
                {
                    "name": "APPLICATION_STATE",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.APPLICATION_STATE"
                },
                {
                    "name": "LISTING_ACCESS_HISTORY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_ACCESS_HISTORY"
                },
                {
                    "name": "LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_DATABASE_STORAGE_DAILY"
                },
                {
                    "name": "LISTING_AUTO_FULFILLMENT_REFRESH_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_AUTO_FULFILLMENT_REFRESH_DAILY"
                },
                {
                    "name": "LISTING_CONSUMPTION_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_CONSUMPTION_DAILY"
                },
                {
                    "name": "LISTING_EVENTS_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.LISTING_EVENTS_DAILY"
                },
                {
                    "name": "MARKETPLACE_DISBURSEMENT_REPORT",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_DISBURSEMENT_REPORT"
                },
                {
                    "name": "MARKETPLACE_PAID_USAGE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PAID_USAGE_DAILY"
                },
                {
                    "name": "MARKETPLACE_PURCHASE_EVENTS_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MARKETPLACE_PURCHASE_EVENTS_DAILY"
                },
                {
                    "name": "MONETIZED_USAGE_DAILY",
                    "value": "SELECT * FROM SNOWFLAKE.DATA_SHARING_USAGE.MONETIZED_USAGE_DAILY"
                }
            ],
            "timeout": "1000",
            "database": "GAIAN1",
            "schema": "TABLE1",
            "warehouse": "FIRST_WAREHOUSE",
            "role": "ACCOUNTADMIN"
        },
        "outputParameters": {
            "resultSetMetaData": {
                "numRows": 91,
                "format": "jsonv2",
                "partitionInfo": [
                    {
                        "rowCount": 91,
                        "uncompressedSize": 13354
                    }
                ],
                "rowType": [
                    {
                        "name": "CREATED_ON",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": 0,
                        "scale": 6,
                        "byteLength": "null",
                        "collation": "null",
                        "type": "timestamp_ltz",
                        "length": "null"
                    },
                    {
                        "name": "MODIFIED_ON",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": 0,
                        "scale": 6,
                        "byteLength": "null",
                        "collation": "null",
                        "type": "timestamp_ltz",
                        "length": "null"
                    },
                    {
                        "name": "PRIVILEGE",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "GRANTED_ON",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "NAME",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "TABLE_CATALOG",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "TABLE_SCHEMA",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "GRANTED_TO",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": false,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 64,
                        "collation": "null",
                        "type": "text",
                        "length": 16
                    },
                    {
                        "name": "GRANTEE_NAME",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "GRANT_OPTION",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": "null",
                        "collation": "null",
                        "type": "boolean",
                        "length": "null"
                    },
                    {
                        "name": "GRANTED_BY",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "DELETED_ON",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": 0,
                        "scale": 6,
                        "byteLength": "null",
                        "collation": "null",
                        "type": "timestamp_ltz",
                        "length": "null"
                    },
                    {
                        "name": "GRANTED_BY_ROLE_TYPE",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    },
                    {
                        "name": "OBJECT_INSTANCE",
                        "database": "SNOWFLAKE",
                        "schema": "ACCOUNT_USAGE",
                        "table": "GRANTS_TO_ROLES$V15",
                        "nullable": true,
                        "precision": "null",
                        "scale": "null",
                        "byteLength": 16777216,
                        "collation": "null",
                        "type": "text",
                        "length": 16777216
                    }
                ]
            },
            "data": [
                [
                    "1708524704.367000",
                    "1708524704.367000",
                    "OWNERSHIP",
                    "WAREHOUSE",
                    "FIRST_WAREHOUSE",
                    "null",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "PUBLIC",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708524869.215000",
                    "1708580448.180000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "TABLE1",
                    "GAIAN",
                    "TABLE1",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "PUBLIC",
                    "1708580448.180000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708526109.809000",
                    "1708526109.809000",
                    "USAGE",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "PUBLIC",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708522524.409000",
                    "1708522524.409000",
                    "OWNERSHIP",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "PUBLIC",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708522497.374000",
                    "1708522497.374000",
                    "OWNERSHIP",
                    "DATABASE",
                    "SAI",
                    "SAI",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "PUBLIC",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708580551.227000",
                    "1708580551.227000",
                    "OWNERSHIP",
                    "WAREHOUSE",
                    "GAIAN",
                    "null",
                    "null",
                    "ROLE",
                    "USERADMIN",
                    "true",
                    "USERADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708580448.181000",
                    "1708584315.376000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "TABLE1",
                    "GAIAN",
                    "TABLE1",
                    "ROLE",
                    "USERADMIN",
                    "true",
                    "USERADMIN",
                    "1708584315.376000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708519661.569000",
                    "1708524704.365000",
                    "OWNERSHIP",
                    "WAREHOUSE",
                    "FIRST_WAREHOUSE",
                    "null",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "1708524704.365000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708519765.608000",
                    "1708519765.608000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "PUBLIC",
                    "FIRST_PROJECT2",
                    "PUBLIC",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708521332.617000",
                    "1708521332.617000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "FIRST",
                    "FIRST_PROJECT2",
                    "FIRST",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584596.154000",
                    "1708584596.154000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "PUBLIC",
                    "GAIAN1",
                    "PUBLIC",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708520285.996000",
                    "1708520285.996000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "PUBLIC",
                    "GAIAN",
                    "PUBLIC",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708519478.122000",
                    "1708519478.122000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "PUBLIC",
                    "FIRST_PROJECT",
                    "PUBLIC",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708519478.097000",
                    "1708519478.097000",
                    "OWNERSHIP",
                    "DATABASE",
                    "FIRST_PROJECT",
                    "FIRST_PROJECT",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708520285.973000",
                    "1708522524.408000",
                    "OWNERSHIP",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "1708522524.408000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708522148.326000",
                    "1708522148.326000",
                    "MONITOR",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "false",
                    "SYSADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708522165.488000",
                    "1708522519.390000",
                    "MONITOR",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "SYSADMIN",
                    "1708522519.390000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708522193.840000",
                    "1708522519.376000",
                    "USAGE",
                    "DATABASE",
                    "GAIAN",
                    "GAIAN",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "true",
                    "SYSADMIN",
                    "1708522519.376000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708519765.584000",
                    "1708583286.430000",
                    "OWNERSHIP",
                    "DATABASE",
                    "FIRST_PROJECT2",
                    "FIRST_PROJECT2",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "SYSADMIN",
                    "1708583286.430000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708069446.741000",
                    "1708580551.222000",
                    "OWNERSHIP",
                    "WAREHOUSE",
                    "GAIAN",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "1708580551.222000",
                    "ROLE",
                    "null"
                ],
                [
                    "1707659086.091000",
                    "1707659086.091000",
                    "OWNERSHIP",
                    "WAREHOUSE",
                    "COMPUTE_WH",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708072713.115000",
                    "1708072713.115000",
                    "OWNERSHIP",
                    "USER",
                    "SAI",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708072612.173000",
                    "1708072612.173000",
                    "OWNERSHIP",
                    "NETWORK POLICY",
                    "sai",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1707659962.486000",
                    "1707659962.486000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "PUBLIC",
                    "SAI",
                    "PUBLIC",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708073129.826000",
                    "1708073129.826000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "KIRAN",
                    "SAI",
                    "KIRAN",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584596.704000",
                    "1708584596.704000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "TABLE1",
                    "GAIAN1",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584315.377000",
                    "1708584315.377000",
                    "OWNERSHIP",
                    "SCHEMA",
                    "TABLE1",
                    "GAIAN",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584027.315000",
                    "1708584027.315000",
                    "OWNERSHIP",
                    "TABLE",
                    "FILETABLE1",
                    "GAIAN",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584596.319000",
                    "1708584596.319000",
                    "OWNERSHIP",
                    "TABLE",
                    "FILETABLE1",
                    "GAIAN1",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708580089.708000",
                    "1708580089.708000",
                    "OWNERSHIP",
                    "INTEGRATION",
                    "SAI",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708582216.459000",
                    "1708582216.459000",
                    "OWNERSHIP",
                    "INTEGRATION",
                    "BHAI",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708580504.191000",
                    "1708580504.191000",
                    "OWNERSHIP",
                    "INTEGRATION",
                    "SAIKIRAN",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708583934.686000",
                    "1708583934.686000",
                    "OWNERSHIP",
                    "FILE FORMAT",
                    "FILE1",
                    "GAIAN",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584596.232000",
                    "1708584596.232000",
                    "OWNERSHIP",
                    "FILE FORMAT",
                    "FILE1",
                    "GAIAN1",
                    "TABLE1",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1707658986.851000",
                    "1707658986.851000",
                    "USAGE",
                    "DATABASE",
                    "SNOWFLAKE_SAMPLE_DATA",
                    "SNOWFLAKE_SAMPLE_DATA",
                    "null",
                    "ROLE",
                    "PUBLIC",
                    "false",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1707658985.822000",
                    "1707658985.822000",
                    "OWNERSHIP",
                    "DATABASE",
                    "SNOWFLAKE_SAMPLE_DATA",
                    "SNOWFLAKE_SAMPLE_DATA",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1707659962.465000",
                    "1708522497.372000",
                    "OWNERSHIP",
                    "DATABASE",
                    "SAI",
                    "SAI",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "1708522497.372000",
                    "ROLE",
                    "null"
                ],
                [
                    "1708583286.432000",
                    "1708583286.432000",
                    "OWNERSHIP",
                    "DATABASE",
                    "FIRST_PROJECT2",
                    "FIRST_PROJECT2",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1708584596.043000",
                    "1708584596.043000",
                    "OWNERSHIP",
                    "DATABASE",
                    "GAIAN1",
                    "GAIAN1",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "ACCOUNTADMIN",
                    "null",
                    "ROLE",
                    "null"
                ],
                [
                    "1707658980.466000",
                    "1707658980.466000",
                    "CREATE ACCOUNT",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.467000",
                    "1707658980.467000",
                    "CREATE API INTEGRATION",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.485000",
                    "1707658980.485000",
                    "MODIFY SESSION TRACE LEVEL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.453000",
                    "1707658980.453000",
                    "CREATE ROLE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "USERADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.477000",
                    "1707658980.477000",
                    "MONITOR SECURITY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.462000",
                    "1707658980.462000",
                    "CREATE APPLICATION",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.462000",
                    "1707658980.462000",
                    "MONITOR USAGE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.459000",
                    "1707658980.459000",
                    "CREATE WAREHOUSE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.465000",
                    "1707658980.465000",
                    "OVERRIDE SHARE RESTRICTIONS",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.481000",
                    "1707658980.481000",
                    "MANAGE ACCOUNT SUPPORT CASES",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.489000",
                    "1707658980.489000",
                    "APPLY RESOURCE GROUP",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.463000",
                    "1707658980.463000",
                    "IMPORT SHARE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.445000",
                    "1707658980.445000",
                    "USAGE",
                    "ROLE",
                    "SYSADMIN",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.452000",
                    "1707658980.452000",
                    "CREATE USER",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "USERADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.454000",
                    "1707658980.454000",
                    "CREATE NETWORK POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.457000",
                    "1707658980.457000",
                    "APPLY PASSWORD POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.489000",
                    "1707658980.489000",
                    "CANCEL QUERY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.629000",
                    "1707658980.629000",
                    "MANAGE ORGANIZATION SUPPORT CASES",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ORGADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.479000",
                    "1707658980.479000",
                    "PURCHASE DATA EXCHANGE LISTING",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.485000",
                    "1707658980.485000",
                    "RESOLVE ALL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.455000",
                    "1707658980.455000",
                    "ATTACH POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.466000",
                    "1707658980.466000",
                    "CREATE INTEGRATION",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.468000",
                    "1707658980.468000",
                    "MANAGE WAREHOUSES",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.482000",
                    "1707658980.482000",
                    "MANAGE USER SUPPORT CASES",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.457000",
                    "1707658980.457000",
                    "APPLY AUTHENTICATION POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.470000",
                    "1707658980.470000",
                    "EXECUTE ALERT",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.456000",
                    "1707658980.456000",
                    "MANAGE GRANTS",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.459000",
                    "1707658980.459000",
                    "CREATE DATABASE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.493000",
                    "1707658980.493000",
                    "MANAGE EVENT SHARING",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.484000",
                    "1707658980.484000",
                    "MODIFY SESSION LOG LEVEL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.484000",
                    "1707658980.484000",
                    "MODIFY TRACE LEVEL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.470000",
                    "1707658980.470000",
                    "EXECUTE TASK",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.480000",
                    "1707658980.480000",
                    "CREATE REPLICATION GROUP",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.483000",
                    "1707658980.483000",
                    "MODIFY LOG LEVEL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.485000",
                    "1707658980.485000",
                    "AUDIT",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.483000",
                    "1707658980.483000",
                    "CREATE CREDENTIAL",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.628000",
                    "1707658980.628000",
                    "MANAGE LISTING AUTO FULFILLMENT",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ORGADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.477000",
                    "1707658980.477000",
                    "CREATE DATA EXCHANGE LISTING",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.462000",
                    "1707658980.462000",
                    "CREATE SHARE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.456000",
                    "1707658980.456000",
                    "APPLY SESSION POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.480000",
                    "1707658980.480000",
                    "CREATE FAILOVER GROUP",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.473000",
                    "1707658980.473000",
                    "MONITOR EXECUTION",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.460000",
                    "1707658980.460000",
                    "BIND SERVICE ENDPOINT",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SYSADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.443000",
                    "1707658980.443000",
                    "USAGE",
                    "ROLE",
                    "USERADMIN",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.444000",
                    "1707658980.444000",
                    "USAGE",
                    "ROLE",
                    "SECURITYADMIN",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.476000",
                    "1707658980.476000",
                    "EXECUTE DATA METRIC FUNCTION",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.470000",
                    "1707658980.470000",
                    "EXECUTE MANAGED TASK",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.487000",
                    "1707658980.487000",
                    "MONITOR",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.474000",
                    "1707658980.474000",
                    "APPLY MASKING POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.632000",
                    "1707658980.632000",
                    "PURCHASE DATA EXCHANGE LISTING",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ORGADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.459000",
                    "1707658980.459000",
                    "APPLY PACKAGES POLICY",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "SECURITYADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ],
                [
                    "1707658980.461000",
                    "1707658980.461000",
                    "CREATE APPLICATION PACKAGE",
                    "ACCOUNT",
                    "SJ62485",
                    "null",
                    "null",
                    "ROLE",
                    "ACCOUNTADMIN",
                    "true",
                    "null",
                    "null",
                    "null",
                    "null"
                ]
            ],
            "code": "090001",
            "statementStatusUrl": "/api/v2/statements/01b29a6d-0001-187e-0000-00037812b4f5?requestId=5021817a-a6df-4463-acad-95e7676bfef7",
            "requestId": "5021817a-a6df-4463-acad-95e7676bfef7",
            "sqlState": "00000",
            "statementHandle": "01b29a6d-0001-187e-0000-00037812b4f5",
            "message": "Statement executed successfully.",
            "createdOn": 1708929475689
        },
        "id": "1203.9"
    }
]

});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77acd1e40c81a6bc9d1c0/instances/list").reply(200, {
  entities: [
    {
        "analyticsStyleName": "API Utilization",
        "analyticsStyleDescription": "Tracking API calls to Okta services.",
        "createdBy": "Jackie",
        "collectionOfAQs": [],
        "createdOn": "2024-04-15T05:39:10.038Z",
        "id": "2024-04-15T05:39:10.039Z"
    },
    {
        "analyticsStyleName": "Role based Utilization",
        "analyticsStyleDescription": "Identifying Okta usage patterns based on user roles.",
        "createdBy": "Jackie",
        "collectionOfAQs": [],
        "createdOn": "2024-04-15T13:36:31.598Z",
        "id": "2024-04-15T13:36:31.598Z"
    }
]


});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77b371e40c81a6bc9d1c3/instances/list").reply(200, {
  entities: [
    {
        "analyticsStyleName": "Costs Appropriation",
        "analyticsStyleDescription": "Analyzing costs associated with OpenAI usage.",
        "createdBy": "Jackie c",
        "collectionOfAQs": [
            "6560793540eb1835fe4d05de",
            "65607e8e40eb1835fe4d05ee"
        ],
        "createdOn": "2024-03-14T05:39:10.038Z",
        "id": "2024-03-14T05:39:10.039Z"
    },
    {
        "analyticsStyleName": "Role based Utilization",
        "analyticsStyleDescription": "Identifying OpenAI usage patterns based on user roles.",
        "createdBy": "Jackie",
        "collectionOfAQs": [],
        "createdOn": "2024-02-14T05:39:10.038Z",
        "id": "2024-01-14T05:39:10.039Z"
    }
]


});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65a77b181e40c81a6bc9d1c1/instances/list").reply(200, {
  entities:  [
    {
       "analyticsStyleName": "Storage Consumption",
       "analyticsStyleDescription": "Snowflake storage usage analysis.",
       "createdBy": "Jackie",
       "collectionOfAQs": [
        "65658aec367e4160070e86f9",
        "65604b6059570d3e1663dd8f",
        "6560472059570d3e1663dd4d"
       ],
       "createdOn": "2024-03-16T05:39:10.038Z",
       "id": "2024-03-16T05:39:10.039Z"
   },
   {
       "analyticsStyleName": "API Utilization",
       "analyticsStyleDescription": "Measuring API calls made to Snowflake.",
       "createdBy": "Jackie",
       "collectionOfAQs": [],
       "createdOn": "2024-03-16T05:39:10.038Z",
       "id": "2024-03-17T05:39:10.039Z"
   },
   {
       "analyticsStyleName": "Costs Appropriation",
       "analyticsStyleDescription": "Analyzing costs associated with Snowflake usage.",
       "createdBy": "Jackie",
       "collectionOfAQs": [
        "6560793540eb1835fe4d05de",
        "65607e8e40eb1835fe4d05ee"
       ],
       "createdOn": "2024-03-16T05:39:10.038Z",
       "id": "2024-03-19T05:39:10.039Z"
   },
   {
       "analyticsStyleName": "Product Categorization",
       "analyticsStyleDescription": "Categorizing Snowflake products and services usage.",
       "createdBy": "Jackie",
       "collectionOfAQs": [],
       "createdOn": "2024-03-16T05:39:10.038Z",
       "id": "2024-03-18T05:39:10.039Z"
   }
]


});


// anlytical queries.....................................................................


// mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65523f7a060abb4a5ff3c0c4/instances/list").reply(200, {
//   entities: [
//     {
//         "BQ_Name": "Usage by Product over MoM",
//         "rawQuery": "WITH monthly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM') AS month, TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon') AS X_Axis, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_usage\")::numeric, 2) AS numeric) AS total_usage FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '12 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM'), TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon'), \"entity.Mobius_PI_product_type\"), monthly_change AS (SELECT month, X_Axis, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY month) AS prev_month_usage FROM monthly_usage) SELECT month, X_Axis AS x_axis, product_type, total_usage, CAST(ROUND(CAST(CASE WHEN prev_month_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_month_usage) / prev_month_usage) * 100 ELSE 0 END AS numeric), 2) AS numeric) AS y_axis FROM monthly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(month, 'YYYY-MM')::date) ORDER BY product_type, month DESC",
//         "BQ_Description": "Average usage of product month over month",
//         "BQ_Id": "65658aec367e4160070e86f9",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Feb 2024"
//     },
//     {
//         "BQ_Name": "Usage by Product over QoQ",
//         "rawQuery": "WITH quarterly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q') AS quarter, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_usage\")::numeric, 2) AS numeric) AS total_usage FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '36 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q'), \"entity.Mobius_PI_product_type\"), quarterly_change AS (SELECT quarter, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY quarter) AS prev_quarter_usage FROM quarterly_usage) SELECT quarter, product_type, total_usage, CAST(ROUND(CAST(CASE WHEN prev_quarter_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_quarter_usage) / prev_quarter_usage) * 100 ELSE 0 END AS numeric), 2) AS numeric) AS qoq_percentage_change FROM quarterly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(quarter, 'YYYY-Q')::date) ORDER BY product_type, quarter DESC",
//         "BQ_Description": "Average usage of product quarter on quarter",
//         "BQ_Id": "65604b6059570d3e1663dd8f",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 20 Feb 2024"
//     },
//     {
//         "BQ_Name": "Usage by Product Over YoY",
//         "rawQuery": "WITH yearly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY') AS X_Axis, \"entity.Mobius_PI_product_type\" AS product_type, SUM(\"entity.Mobius_PI_total_usage\") AS total_usage FROM t_655340cba34e3b716bd16b3e_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '5 years' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY'), \"entity.Mobius_PI_product_type\"), monthly_change AS (SELECT X_Axis, product_type, total_usage, LAG(total_usage) OVER (PARTITION BY product_type ORDER BY X_Axis) AS prev_month_usage FROM yearly_usage) SELECT X_Axis, X_Axis, product_type, total_usage, ROUND(CAST(CASE WHEN prev_month_usage IS NOT NULL AND total_usage != 0 THEN ((total_usage - prev_month_usage) / prev_month_usage) * 100 ELSE 0 END AS numeric), 2) AS Y_Axis FROM monthly_change ORDER BY product_type, X_Axis DESC",
//         "BQ_Description": "Average usage of product year on year",
//         "BQ_Id": "6560472059570d3e1663dd4d",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     },
//     {
//         "BQ_Name": "Cost Distribution by User Over MoM",
//         "rawQuery": "WITH monthly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM') AS month, TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon') AS X_Axis, \"entity.Mobius_PI_user_type\" AS user_type, SUM(\"entity.Mobius_PI_total_cost\") AS total_cost FROM t_655f5664c0d85d0b126005c2_t WHERE \"entity.Mobius_PI_date\"::timestamp >= DATE_TRUNC('year', CURRENT_DATE) AND \"entity.Mobius_PI_date\"::timestamp <= CURRENT_DATE AND \"entity.Mobius_PI_user_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-MM'), TO_CHAR(\"entity.Mobius_PI_date\"::date, 'Mon'), \"entity.Mobius_PI_user_type\"), monthly_change AS (SELECT month, X_Axis, user_type, total_cost, LAG(total_cost) OVER (PARTITION BY user_type ORDER BY month) AS prev_month_cost FROM monthly_usage) SELECT month, X_Axis, user_type, CAST(total_cost as numeric(10,2)), ROUND(CAST(CASE WHEN prev_month_cost IS NOT NULL AND total_cost != 0 THEN ((total_cost - prev_month_cost) / prev_month_cost) * 100 ELSE 0 END AS numeric), 2) AS Y_Axis FROM monthly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(month, 'YYYY-MM')::date) ORDER BY user_type, month DESC",
//         "BQ_Description": "OverAll cost consumed by the user month on month",
//         "BQ_Id": "6560793540eb1835fe4d05de",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     },
//     {
//         "BQ_Name": "Cost Distribution by User Over QoQ",
//         "rawQuery": "WITH quarterly_usage AS (SELECT TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q') AS quarter, \"entity.Mobius_PI_product_type\" AS product_type, CAST(ROUND(SUM(\"entity.Mobius_PI_total_cost\")::numeric, 2) AS numeric) AS total_cost  FROM t_655c95a5e2994a674b7b8cdf_t WHERE \"entity.Mobius_PI_date\"::timestamp >= CURRENT_DATE - INTERVAL '36 months' AND \"entity.Mobius_PI_product_type\" IS NOT NULL GROUP BY TO_CHAR(\"entity.Mobius_PI_date\"::date, 'YYYY-Q'), \"entity.Mobius_PI_product_type\"), quarterly_change AS (SELECT quarter, product_type, total_cost, LAG(total_cost) OVER (PARTITION BY product_type ORDER BY quarter) AS prev_quarter_cost FROM quarterly_usage) SELECT quarter AS X_Axis, product_type, total_cost, ROUND(CAST(CASE WHEN prev_quarter_cost IS NOT NULL AND total_cost != 0 THEN ((total_cost - prev_quarter_cost) / prev_quarter_cost) * 100 ELSE 0 END AS numeric), 2) AS y_axis FROM quarterly_change WHERE EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM TO_TIMESTAMP(quarter, 'YYYY-Q')::date) ORDER BY product_type, quarter DESC",
//         "BQ_Description": "OverAll cost consumed by the user quarter on quarter",
//         "BQ_Id": "65607e8e40eb1835fe4d05ee",
//         "evaluationType": "Scheduled",
//         "Created By": "Sri Cherry Kotamreddy 11 Apr 2023, 9:34 am",
//         "Modified By": "Sowmya 9:34 am, 21 Mar 2024"
//     }
// ]


// });


// anlytical queries.....................................................................

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65523f7a060abb4a5ff3c0c4/instances/list").reply(200, {
    entities: [
      {
          "BQ_Name": "Total Yield by Year and Crop Season",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year,SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield,`entity.Mobius_PI_crop_season` AS crop_season FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, crop_season ORDER BY year",
          "BQ_Description": "Total yield per crop season by year",
          "BQ_Id": "66b1edc3311fa40776ef57eb",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield by Year, Crop Season, and Crop Type",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield,`entity.Mobius_PI_crop_season` AS crop_season,`entity.Mobius_PI_crop_types` AS crop_types FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, crop_season, crop_types ORDER BY year",
          "BQ_Description": "Total yield per crop type and crop season by year",
          "BQ_Id": "66b1f9edb7ea59463e796644",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield by Year, District, and Crop Season",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield,`entity.Mobius_PI_district` AS district,`entity.Mobius_PI_crop_season` AS crop_season FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, district, crop_season ORDER BY year",
          "BQ_Description": "Total yield per district and crop season by year",
          "BQ_Id": "66b205e3b7ea59463e796645",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield by Land Size Category and Year",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, CASE WHEN CAST(`entity.Mobius_PI_land_size_in_acres` AS DOUBLE) < 2 THEN 'Small' WHEN CAST(`entity.Mobius_PI_land_size_in_acres` AS DOUBLE) BETWEEN 2 AND 5 THEN 'Medium' ELSE 'Large' END AS land_size_category, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, land_size_category ORDER BY year",
          "BQ_Description": "Total yield by land size category (Small, Medium, Large) per year",
          "BQ_Id": "66b20773b7ea59463e796646",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield by Crop Season and District for a Specific Year (e.g., 2023)",
          "rawQuery": "SELECT `entity.Mobius_PI_crop_season` AS crop_season, `entity.Mobius_PI_district` AS district, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield FROM t_66b06f0cc0f6e446a593d64b_t WHERE `entity.Mobius_PI_year` = 2023 GROUP BY crop_season, district",
          "BQ_Description": "Total yield by crop season and district for the year 2023",
          "BQ_Id": "66b2095eb7ea59463e796647",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Identifying season wise crop yield for every year",
          "rawQuery": "SELECT `entity.Mobius_PI_year` as year, ROUND(SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS FLOAT)), 1) AS total_yield, `entity.Mobius_PI_crop_season` as crop_season FROM t_66b06f0cc0f6e446a593d64b_t  GROUP BY `entity.Mobius_PI_year`, `entity.Mobius_PI_crop_season` ORDER BY `entity.Mobius_PI_year`",
          "BQ_Description": "Yield with different bars for each crop season in a year",
          "BQ_Id": "66b209fcb7ea59463e796648",
          "evaluationType": "Scheduled",
          "Created By": "Eswar 06 Aug 2024, 9:34 am",
          "Modified By": "Kushal 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield for Every Year per Crop Type",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, crop_types ORDER BY year, crop_types",
          "BQ_Description": "Total yield by crop type and year, ordered by year and crop type",
          "BQ_Id": "66b20a59311fa40776ef57ec",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Average Yield for Each Crop Type Across All Years",
          "rawQuery": "SELECT `entity.Mobius_PI_crop_types` AS crop_types, AVG(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS average_yield FROM t_66acb35a1a61a36f27e3b1a5_t GROUP BY crop_types ORDER BY crop_types",
          "BQ_Description": "Average yield by crop type, ordered by crop type",
          "BQ_Id": "66b20fbfb7ea59463e79664b",
          "evaluationType": "Scheduled",
          "Created By": "Eswar 06 Aug 2024, 9:34 am",
          "Modified By": "Kushal 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Total Yield for Each State per Year",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_state` AS state, SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)) AS total_yield FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, `entity.Mobius_PI_state` ORDER BY year, `entity.Mobius_PI_state`",
          "BQ_Description": "Total yield by state and year, ordered by year and state",
          "BQ_Id": "66b20fbfb7ea59463e79664b",
          "evaluationType": "Scheduled",
          "Created By": "Rajui 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Average Moisture Content for Each Crop Type per Year",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, AVG(CAST(REPLACE(`entity.Mobius_PI_moisture_content_in_percentage`, '%', '') AS DOUBLE)) AS average_moisture FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, `entity.Mobius_PI_crop_types` ORDER BY year, `entity.Mobius_PI_crop_types`",
          "BQ_Description": "Average moisture content by crop type and year, ordered by year and crop type",
          "BQ_Id": "66b2109cb7ea59463e79664c",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Average Land Size for Each Crop Type per Year",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, AVG(CAST(`entity.Mobius_PI_land_size_in_acres` AS DOUBLE)) AS average_land_size FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, `entity.Mobius_PI_crop_types` ORDER BY year, `entity.Mobius_PI_crop_types`",
          "BQ_Description": "Average land size by crop type and year, ordered by year and crop type",
          "BQ_Id": "66b210df311fa40776ef57ef",
          "evaluationType": "Scheduled",
          "Created By": "Sudharshan 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Count of Samples Collected per Year per Crop Type",
          "rawQuery": "SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, COUNT(`entity.Mobius_PI_sampleCount`) AS sample_count FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY year, `entity.Mobius_PI_crop_types` ORDER BY year, `entity.Mobius_PI_crop_types`",
          "BQ_Description": "Count of samples by crop type and year, ordered by year and crop type",
          "BQ_Id": "66b21129311fa40776ef57f0",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Yield by Crop Type Over YoY (Year over Year)",
          "rawQuery": "WITH yearly_usage AS ( SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, ROUND(SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS FLOAT)), 1) AS total_yield ,`entity.Mobius_PI_crop_types` FROM t_66b06f0cc0f6e446a593d64b_t GROUP BY `entity.Mobius_PI_year`, `entity.Mobius_PI_crop_types` ), yearly_change AS ( SELECT year, crop_types, total_yield, LAG(total_yield) OVER (PARTITION BY crop_types ORDER BY year) AS prev_year_yield FROM yearly_usage ) SELECT year, crop_types, total_yield, CAST(ROUND(CASE WHEN prev_year_yield IS NOT NULL AND total_yield != 0 THEN ((total_yield - prev_year_yield) / prev_year_yield) * 100 ELSE 0 END, 2) AS DOUBLE) AS yoy_growth FROM yearly_change HAVING yoy_growth <> 0 ORDER BY crop_types, year",
          "BQ_Description": "Calculates the year-over-year growth rate of crop yield by crop type, showing percentage changes between consecutive years",
          "BQ_Id": "66b21178311fa40776ef57f1",
          "evaluationType": "Scheduled",
          "Created By": "Kushal 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      },
      {
          "BQ_Name": "Rate of Growth for yield",
          "rawQuery": "WITH yearly_usage AS ( SELECT `entity.Mobius_PI_year` AS year, `entity.Mobius_PI_crop_types` AS crop_types, ROUND(SUM(CAST(`entity.Mobius_PI_yield_in_tons` AS DOUBLE)), 1) AS total_yield FROM t_66b06f0cc0f6e446a593d64b_t WHERE `entity.Mobius_PI_crop_types` IS NOT NULL GROUP BY `entity.Mobius_PI_year`, `entity.Mobius_PI_crop_types` ), cumulative_usage AS ( SELECT year, crop_types, total_yield, SUM(total_yield) OVER (PARTITION BY crop_types ORDER BY year ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING) AS cumulative_yield, ROW_NUMBER() OVER (PARTITION BY crop_types ORDER BY year DESC) AS rn FROM yearly_usage ) SELECT year, crop_types, total_yield, cumulative_yield, CASE WHEN cumulative_yield != 0 THEN CAST((total_yield / cumulative_yield) * 100 AS DECIMAL(10, 2)) ELSE null END AS percentage_yield FROM cumulative_usage WHERE cumulative_yield != 0  ORDER BY crop_types, year",
          "BQ_Description": "Calculates the percentage of each year's crop yield relative to the cumulative yield up to the previous year for different crop types.",
          "BQ_Id": "66b211e3311fa40776ef57f2",
          "evaluationType": "Scheduled",
          "Created By": "Eswar 06 Aug 2024, 9:34 am",
          "Modified By": "Ch Eswar 06 Aug 2024, 9:34 am"
      }
  ]
  
  
  
  });
  



mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d3369f1b707d34e9375580/instances/list").reply(200, {
  entities: [
    {
        "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.CostManagement/forecast",
        "Api_Name": "ForecastedCostData",
        "PlatformName": "AZURE",
        "integrationName": "Azure Cost Analysis",
        "PathParameters": {
            "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
        },
        "inputParameters": {
            "api_version": "2021-10-01",
            "%24top": "5000"
        },
        "body": {
            "type": "ActualCost",
            "dataSet": {
                "granularity": "Daily",
                "aggregation": {
                    "totalCost": {
                        "name": "Cost",
                        "function": "Sum"
                    }
                },
                "sorting": [
                    {
                        "direction": "ascending",
                        "name": "UsageDate"
                    }
                ],
                "filter": {
                    "Dimensions": {
                        "Name": "PublisherType",
                        "Operator": "In",
                        "Values": [
                            "azure"
                        ]
                    }
                }
            },
            "includeActualCost": true,
            "includeFreshPartialCost": false,
            "timePeriod": {
                "from": "2024-02-10T00:00:00+00:00",
                "to": "2024-02-19T23:59:59+00:00"
            }
        },
        "outputParameters":  {
            "Cost": 25.132242,
            "UsageDate": 20240210,
            "CostStatus": "Actual",
            "Currency": "INR",
            "timestamp": 1711707900000
          },
        "no": 29.0,
        "id": "29.0"
    }
]


});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cdab711b707d34e93752c4/instances/list").reply(200, {
  entities: [
    {
        "url": "https://management.azure.com/subscriptions/cbd09df3-41d7-479d-aebf-eef705920c01/resourceGroups/cloud-shell-storage-centralindia/providers/Microsoft.Storage/storageAccounts/mohammedsaleem/providers/microsoft.Insights/metrics",
        "Api_Name": "StorageIngress",
        "PlatformName": "Azure",
        "integrationName": "StrorageAccount",
        "no": 33.0,
        "body": {},
        "PathParameters": {
            "subscriptionId": "cbd09df3-41d7-479d-aebf-eef705920c01",
            "storageAccountName": "mohammedsaleem",
            "api_version": "2019-07-01"
        },
        "inputParameters": {
            "timespan": "2024-02-09T03%3A00%3A00.000Z%2F2024-02-09T07%3A05%3A00.000Z",
            "interval": "PT5M",
            "metricnames": "Ingress",
            "aggregation": "total",
            "metricNamespace": "microsoft.storage%2Fstorageaccounts",
            "autoadjusttimegrain": true,
            "validatedimensions": false
        },
        "outputParameters": {
            "cost": 244,
            "timespan": "2024-02-09T03:00:00Z/2024-02-09T07:05:00Z",
            "interval": "PT5M",
            "value": [
                {
                    "id": "/subscriptions/cbd09df3-41d7-479d-aebf-eef705920c01/resourceGroups/cloud-shell-storage-centralindia/providers/Microsoft.Storage/storageAccounts/mohammedsaleem/providers/Microsoft.Insights/metrics/Ingress",
                    "type": "Microsoft.Insights/metrics",
                    "name": {
                        "value": "Ingress",
                        "localizedValue": "Ingress"
                    },
                    "displayDescription": "The amount of ingress data, in bytes. This number includes ingress from an external client into Azure Storage as well as ingress within Azure.",
                    "unit": "Bytes",
                    "timeseries": [
                        {
                            "metadatavalues": [],
                            "data": [
                                {
                                    "timeStamp": "2024-02-09T03:00:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:05:00Z",
                                    "total": 43439
                                },
                                {
                                    "timeStamp": "2024-02-09T03:10:00Z",
                                    "total": 7256
                                },
                                {
                                    "timeStamp": "2024-02-09T03:15:00Z",
                                    "total": 21712
                                },
                                {
                                    "timeStamp": "2024-02-09T03:20:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:25:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:30:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:35:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:40:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:45:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:50:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T03:55:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:00:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:05:00Z",
                                    "total": 43439
                                },
                                {
                                    "timeStamp": "2024-02-09T04:10:00Z",
                                    "total": 7256
                                },
                                {
                                    "timeStamp": "2024-02-09T04:15:00Z",
                                    "total": 36186
                                },
                                {
                                    "timeStamp": "2024-02-09T04:20:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:25:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:30:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:35:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:40:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:45:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:50:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T04:55:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:00:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:05:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:10:00Z",
                                    "total": 50695
                                },
                                {
                                    "timeStamp": "2024-02-09T05:15:00Z",
                                    "total": 36186
                                },
                                {
                                    "timeStamp": "2024-02-09T05:20:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:25:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:30:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:35:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:40:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:45:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:50:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T05:55:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:00:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:05:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:10:00Z",
                                    "total": 43439
                                },
                                {
                                    "timeStamp": "2024-02-09T06:15:00Z",
                                    "total": 36186
                                },
                                {
                                    "timeStamp": "2024-02-09T06:20:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:25:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:30:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:35:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:40:00Z",
                                    "total": 321
                                },
                                {
                                    "timeStamp": "2024-02-09T06:45:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:50:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T06:55:00Z",
                                    "total": 0
                                },
                                {
                                    "timeStamp": "2024-02-09T07:00:00Z",
                                    "total": 0
                                }
                            ]
                        }
                    ],
                    "errorCode": "Success"
                }
            ],
            "namespace": "microsoft.storage/storageaccounts",
            "resourceregion": "eastus"
        },
        "id": "33.0"
    }
]
});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cc8e5d1b707d34e93751b3/instances/list").reply(200, {
  entities: [
    {
        "url": "https://management.azure.com/subscriptions/{{subscriptionId}}}/providers/microsoft.insights/eventtypes/management/values",
        "Api_Name": "StorageActivityLogs",
        "inputParameters": {
            "filter": "resourceId eq '/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage' and eventTimestamp ge 2024-01-01T00:00:00.000Z and eventTimestamp le 2024-02-09T23:59:59.999Z",
            "api_version": "2015-04-01"
        },
        "PathParameters": {
            "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
        },
        "body": {},
        "outputParameters": {
            "value": [
                {
                    "id": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6/events/0dd26461-67d5-4bca-8504-beb4caff04bd/ticks/638429902746360066",
                    "level": "Informational",
                    "resourceGroupName": "edo",
                    "resourceProviderName": {
                        "value": "Microsoft.Authorization",
                        "localizedValue": "Microsoft.Authorization"
                    },
                    "resourceId": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6",
                    "resourceType": {
                        "value": "Microsoft.Authorization/roleAssignments",
                        "localizedValue": "Microsoft.Authorization/roleAssignments"
                    },
                    "operationId": "ac5911d9-9323-4598-8595-3e2cd93bda9f",
                    "operationName": {
                        "value": "Microsoft.Authorization/roleAssignments/write",
                        "localizedValue": "Create role assignment"
                    },
                    "properties": {
                        "statusCode": "Created",
                        "serviceRequestId": null,
                        "eventCategory": "Administrative",
                        "entity": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Storage/storageAccounts/edostorage/providers/Microsoft.Authorization/roleAssignments/417be922-f6f4-4f61-94d1-abe30650c1d6",
                        "message": "Microsoft.Authorization/roleAssignments/write",
                        "hierarchy": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
                    },
                    "status": {
                        "value": "Succeeded",
                        "localizedValue": "Succeeded"
                    },
                    "subStatus": {
                        "value": "Created",
                        "localizedValue": "Created (HTTP Status Code: 201)"
                    },
                    "eventTimestamp": "2024-02-08T11:57:54.6360066Z",
                    "submissionTimestamp": "2024-02-08T11:59:48Z",
                    "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97",
                    "tenantId": "d0ef17f2-2e96-4f38-a058-8dc5f419e700"
                }
            ]
        },
        "no": 4.0,
        "id": "4.0"
    }
]
});


mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65f14bfc5f353406a916b8dc/instances/list").reply(200, {
  entities: [
    {
        "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/providers/Microsoft.CostManagement/query?api-version=2021-10-01&%24top=5000",
        "Api_Name": "CostbyResourceGroupName",
        "integrationName": "AzureCostAnalysis",
        "no": 1203.9,
        "PathParameters": {
            "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
        },
        "inputParameters": {
            "api_version": "2021-10-01"
        },
        "body": {
            "type": "ActualCost",
            "dataSet": {
                "granularity": "Daily",
                "aggregation": {
                    "totalCost": {
                        "name": "Cost",
                        "function": "Sum"
                    },
                    "totalCostUSD": {
                        "name": "CostUSD",
                        "function": "Sum"
                    }
                },
                "sorting": [
                    {
                        "direction": "ascending",
                        "name": "UsageDate"
                    }
                ],
                "grouping": [
                    {
                        "type": "Dimension",
                        "name": "ResourceGroupName"
                    }
                ]
            },
            "timeframe": "Custom",
            "timePeriod": {
                "from": "2024-02-13T00:00:00+00:00",
                "to": "2024-02-14T23:59:59+00:00"
            }
        },
        "outputParameters":  {
            "Cost": 25.132456,
            "CostUSD": 0.30228624,
            "UsageDate": 20240212,
            "ResourceGroupName": "edo",
            "Currency": "INR",
            "timestamp": 1711719600000
          },
        "id": "1203.9"
    }
]
});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cc6c6f1b707d34e937518e/instances/list").reply(200, {
  entities: [
    {
        "url": "https://management.azure.com/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Compute/virtualMachines/edovirtual/providers/microsoft.insights/metrics",
        "Api_Name": "VirtualMachineData",
        "inputParameters": {
            "timespan": "string",
            "interval": "string",
            "metricnames": "string",
            "aggregation": "string",
            "api_version": "string"
        },
        "PathParameters": {
            "subscriptionId": "ef75a5b3-c965-4865-adf6-63ebfe1e2d97"
        },
        "body": {},
        "outputParameters": {
            "cost": 1439,
            "timespan": "2024-02-08T00:00:00Z/2024-02-09T00:00:00Z",
            "interval": "PT1H",
            "value": [
                {
                    "id": "/subscriptions/ef75a5b3-c965-4865-adf6-63ebfe1e2d97/resourceGroups/edo/providers/Microsoft.Compute/virtualMachines/edovirtual/providers/Microsoft.Insights/metrics/Percentage CPU",
                    "type": "Microsoft.Insights/metrics",
                    "name": {
                        "value": "Percentage CPU",
                        "localizedValue": "Percentage CPU"
                    },
                    "displayDescription": "The percentage of allocated compute units that are currently in use by the Virtual Machine(s)",
                    "unit": "Percent",
                    "timeseries": [
                        {
                            "metadatavalues": [],
                            "data": [
                                {
                                    "timeStamp": "2024-02-08T00:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T01:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T02:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T03:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T04:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T05:00:00Z"
                                },
                                {
                                    "timeStamp": "2024-02-08T06:00:00Z",
                                    "average": 4.087
                                },
                                {
                                    "timeStamp": "2024-02-08T07:00:00Z",
                                    "average": 1.32075
                                },
                                {
                                    "timeStamp": "2024-02-08T08:00:00Z",
                                    "average": 1.133
                                },
                                {
                                    "timeStamp": "2024-02-08T09:00:00Z",
                                    "average": 1.1274166666666665
                                },
                                {
                                    "timeStamp": "2024-02-08T10:00:00Z",
                                    "average": 1.12125
                                },
                                {
                                    "timeStamp": "2024-02-08T11:00:00Z",
                                    "average": 1.1713333333333333
                                },
                                {
                                    "timeStamp": "2024-02-08T12:00:00Z",
                                    "average": 1.1854166666666666
                                },
                                {
                                    "timeStamp": "2024-02-08T13:00:00Z",
                                    "average": 1.1359166666666667
                                },
                                {
                                    "timeStamp": "2024-02-08T14:00:00Z",
                                    "average": 1.1542016806722688
                                },
                                {
                                    "timeStamp": "2024-02-08T15:00:00Z",
                                    "average": 1.1782499999999998
                                },
                                {
                                    "timeStamp": "2024-02-08T16:00:00Z",
                                    "average": 1.1955
                                },
                                {
                                    "timeStamp": "2024-02-08T17:00:00Z",
                                    "average": 1.1798333333333335
                                },
                                {
                                    "timeStamp": "2024-02-08T18:00:00Z",
                                    "average": 1.6054166666666667
                                },
                                {
                                    "timeStamp": "2024-02-08T19:00:00Z",
                                    "average": 1.1652500000000001
                                },
                                {
                                    "timeStamp": "2024-02-08T20:00:00Z",
                                    "average": 1.16275
                                },
                                {
                                    "timeStamp": "2024-02-08T21:00:00Z",
                                    "average": 1.1513333333333333
                                },
                                {
                                    "timeStamp": "2024-02-08T22:00:00Z",
                                    "average": 1.1479166666666667
                                },
                                {
                                    "timeStamp": "2024-02-08T23:00:00Z",
                                    "average": 1.13675
                                }
                            ]
                        }
                    ],
                    "errorCode": "Success"
                }
            ],
            "namespace": "Microsoft.Compute/virtualMachines",
            "resourceregion": "eastus"
        },
        "no": 91.0,
        "id": "91.0"
    }
]
});

mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65d31b2d1b707d34e937552e/instances/list").reply(200, {
  entities: [
    {
        "url": "https://api.openai.com/dashboard/billing/usage",
        "Api_Name": "billing usage",
        "PlatformName": "OPEN AI",
        "integrationName": "Usage",
        "no": 45.0,
        "PathParameters": {},
        "inputParameters": {
            "end_date": "2024-03-01",
            "start_date": "2024-02-01"
        },
        "body": {},
        "outputParameters": {
            "object": "list",
            "daily_costs": [
                {
                    "timestamp": 1.7067456E9,
                    "line_items": [
                        {
                            "name": "GPT-4 Turbo",
                            "cost": 1571.276
                        },
                        {
                            "name": "GPT-4",
                            "cost": 0.0
                        },
                        {
                            "name": "GPT-3.5 Turbo",
                            "cost": 0.0
                        },
                        {
                            "name": "Assistants API",
                            "cost": 48.0
                        },
                        {
                            "name": "Fine-tuning models",
                            "cost": 0.0
                        },
                        {
                            "name": "Embedding models",
                            "cost": 0.0
                        },
                        {
                            "name": "Base models",
                            "cost": 0.0
                        },
                        {
                            "name": "Image models",
                            "cost": 0.0
                        },
                        {
                            "name": "Audio models",
                            "cost": 0.0
                        }
                    ]
                }
            ],
            "total_usage": 12303.158000000003
        },
        "id": "45.0"
    }
]
});
//
// Mock POST request to /users
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/1/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
           
        },
        "body": {
         
        },
        "outputParameters": {
            "name": "saleem",
            "age": "Cloud Logging",
            "address": 0,
            "phoneNo": "2024-02-12",
            "adharid":898933434234
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "sample",
        "Api_Name": "person",
        "no": 1203
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/2/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
           
        },
        "body": {
         
        },
        "outputParameters": {
          "name":"saleem",
          "employeeId":"123",
          "departmentId":"edo",
           "joinDate":"27-11-2009",
           "designation":"LMTS"
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "sample",
        "Api_Name": "employee",
        "no": 1203
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/3/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
           
        },
        "body": {
         
        },
        "outputParameters": {
          "name":"edo",
           "departmentId":"edo",
           "description":"data orchestraion tool"
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "sample",
        "Api_Name": "department",
        "no": 1203
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/4/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
           
        },
        "body": {
         
        },
        "outputParameters": {
          "employeeId":"kiran",
           "salary":"123"
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "sample",
        "Api_Name": "salary",
        "no": 1203
    }
]

});
mock.onGet("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/5/instances/list").reply(200, {
  entities: [
    {
        "PathParameters": {
           
        },
        "body": {
         
        },
        "outputParameters": {
          "employeeId":"kiran",
           "expenditure":"123"
        },
        "url": "https://bigquery.googleapis.com/bigquery/v2/projects/magnetic-nimbus-414111/queries",
        "integrationName": "sample",
        "Api_Name": "cost",
        "no": 1203
    }
]

});
mock.onPost('/users').reply(201, {
  message: 'Fake user created successfully',
});

export default axioos;
