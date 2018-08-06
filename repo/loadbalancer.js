var loadbalancer_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/lbaas/loadbalancers';
var loadbalancer_post_json = {
    "loadbalancer": {
        "description": "simple lb",
        "admin_state_up": true,
        "tenant_id": "b7c1a69e88bf4b21a8148f787aef2081",
        "provisioning_status": "ACTIVE",
        "listeners": [],
        "vip_address": "10.0.0.4",
        "vip_subnet_id": "013d3059-87a4-45a5-91e9-d721068ae0b2",
        "id": "a36c20d0-18e9-42ce-88fd-"+"#{INDEX}",
        "operating_status": "ONLINE",
        "name": "loadbalancer1"
    }
}


var loadbalancer_put_json = {
        "loadbalancer": {
            "description": "simple lb2",
            "admin_state_up": false,
            "tenant_id": "b7c1a69e88bf4b21a8148f787aef2081",
            "provisioning_status": "PENDING_UPDATE",
            "listeners": [],
            "vip_address": "10.0.0.4",
            "vip_subnet_id": "013d3059-87a4-45a5-91e9-d721068ae0b2",
            "id": "a36c20d0-18e9-42ce-88fd"+"#{INDEX}",
            "operating_status": "ONLINE",
            "name": "loadbalancer2"
        }
    
}


exports.loadbalancer_url = loadbalancer_url
exports.loadbalancer_post_json = loadbalancer_post_json
exports.loadbalancer_put_json = loadbalancer_put_json