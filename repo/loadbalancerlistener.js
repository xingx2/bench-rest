var listener_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/lbaas/listeners';
var listener_post_json = {
    "listener": {
        "admin_state_up": true,
        "connection_limit": 100,
        "default_pool_id": null,
        "description": "listener one",
        "id": "39de4d56-d663-46e5-85a1-"+"#{INDEX}",
        "loadbalancers": [
            {
                "id": "a36c20d0-18e9-42ce-88fd-82a35977ee8c"
            }
        ],
        "name": "listener1",
        "protocol": "HTTP",
        "protocol_port": 80,
        "tenant_id": "b7c1a69e88bf4b21a8148f787aef2081"
    }
}

var listener_put_json = {
        "listener": {
            "admin_state_up": false,
            "connection_limit": 200,
            "default_pool_id": null,
            "description": "listener two",
            "id": "39de4d56-d663-46e5-85a1-"+"#{INDEX}",
            "loadbalancers": [
                {
                    "id": "a36c20d0-18e9-42ce-88fd-82a35977ee8c"
                }
            ],
            "name": "listener2",
            "protocol": "HTTP",
            "protocol_port": 80,
            "tenant_id": "1a3e005cf9ce40308c900bcb08e5320c"
        }
    
}


exports.listener_url = listener_url
exports.listener_post_json = listener_post_json
exports.listener_put_json = listener_put_json