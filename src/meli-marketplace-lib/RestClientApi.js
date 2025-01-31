/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* RestClient service.
* @module meli-marketplace-lib/RestClientApi
* @version 3.0.0
*/
export default class RestClientApi {

    /**
    * Constructs a new RestClientApi. 
    * @alias module:meli-marketplace-lib/RestClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the resourceDelete operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourceDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resource path DELETE
     * @param {String} resource 
     * @param {String} accessToken 
     * @param {module:meli-marketplace-lib/RestClientApi~resourceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resourceDelete(resource, accessToken, callback) {
      let postBody = null;
      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourceDelete");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling resourceDelete");
      }

      let pathParams = {
        'resource': resource
      };
      let queryParams = {
        'access_token': accessToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/{resource}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resourceGet operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourceGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resource path GET
     * @param {String} resource 
     * @param {String} accessToken 
     * @param {module:meli-marketplace-lib/RestClientApi~resourceGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resourceGet(resource, queryParams, callback) {
      let postBody = null;
      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourceGet");
      }
      
      if (queryParams === undefined || queryParams === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling resourceGet");
      }

      let pathParams = {
        'resource': resource
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        resource, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resourcePost operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourcePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resourse path POST
     * @param {String} resource 
     * @param {String} accessToken 
     * @param {Object} body 
     * @param {module:meli-marketplace-lib/RestClientApi~resourcePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resourcePost(resource, accessToken, body, callback) {
      let postBody = body;
      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourcePost");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling resourcePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resourcePost");
      }

      let pathParams = {
        'resource': resource
      };
      let queryParams = {
        'access_token': accessToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/{resource}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resourcePut operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourcePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resourse path PUT
     * @param {String} resource 
     * @param {String} accessToken 
     * @param {Object} body 
     * @param {module:meli-marketplace-lib/RestClientApi~resourcePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    resourcePut(resource, accessToken, body, callback) {
      let postBody = body;
      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourcePut");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling resourcePut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resourcePut");
      }

      let pathParams = {
        'resource': resource
      };
      let queryParams = {
        'access_token': accessToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/{resource}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
