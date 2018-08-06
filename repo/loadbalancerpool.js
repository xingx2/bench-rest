var pool_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/lbaas/pools';
var pool_post_json = {
    "pool": {
        "admin_state_up": true,
        "description": "simple pool",
        "healthmonitor_id": null,
        "id": "12ff63af-4127-4074-a251-"+"#{INDEX}",
        "lb_algorithm": "ROUND_ROBIN",
        "listeners": [
            {
                "id": "39de4d56-d663-46e5-85a1-5b9d5fa17829"
            }
        ],
        "members": [],
        "name": "pool1",
        "protocol": "HTTP",
        "session_persistence": {
            "cookie_name": "my_cookie",
            "type": "APP_COOKIE"
        },
        "tenant_id": "b7c1a69e88bf4b21a8148f787aef2081"
    }
}

var pool_put_json = {
        "pool": {
            "admin_state_up": false,
            "description": "pool two",
            "healthmonitor_id": null,
            "id": "12ff63af-4127-4074-a251-"+"#{INDEX}",
            "lb_algorithm": "LEAST_CONNECTIONS",
            "listeners": [
                {
                    "id": "39de4d56-d663-46e5-85a1-5b9d5fa17829"
                }
            ],
            "members": [],
            "name": "pool2",
            "protocol": "HTTP",
            "session_persistence": {
                "cookie_name": null,
                "type": "HTTP_COOKIE"
            },
            "tenant_id": "1a3e005cf9ce40308c900bcb08e5320c"
        }
    
}

exports.pool_url = pool_url
exports.pool_post_json = pool_post_json
exports.pool_put_json = pool_put_json