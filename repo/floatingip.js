var floatingip_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/floatingips';
var floatingip_post_json = {
    "floatingip": {
        "fixed_ip_address": "10.0.0.3",
        "floating_ip_address": "172.24.4.228",
        "floating_network_id": "376da547-b977-4cfe-9cba-275c80debf57",
        "id": "2f245a7b-796b-4f26-9cf9-"+"#{INDEX}",
        "port_id": "ce705c24-c1ef-408a-bda3-7bbd946164ab",
        "router_id": "d23abc8d-2991-4a55-ba98-2aaea84cc72f",
        "status": "ACTIVE",
        "tenant_id": "4969c491a3c74ee4af974e6d800c62de"
    }
}


var floatingip_put_json = {
        "floatingip": {
            "floating_network_id": "376da547-b977-4cfe-9cba-275c80debf57",
            "router_id": "d23abc8d-2991-4a55-ba98-2aaea84cc72f",
            "fixed_ip_address": "10.0.0.4",
            "floating_ip_address": "172.24.4.228",
            "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
            "status": "ACTIVE",
            "port_id": "fc861431-0e6c-4842-a0ed-e2363f9bc3a8",
            "id": "2f245a7b-796b-4f26-9cf9-"+"#{INDEX}"
        }
    
}


exports.floatingip_url = floatingip_url
exports.floatingip_post_json = floatingip_post_json
exports.floatingip_put_json = floatingip_put_json