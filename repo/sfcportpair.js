var portpair_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/sfc/portpairs';
var portpair_post_json = {
    "portpair": {
        "name": "portpair1",
        "ingress": "5e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "egress": "6e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "service_function_parameters": [
            {
                "correlation": "value"
            }
        ],
        "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
}

var portpair_put_json = {
        "portpair": {
            "name": "portpair2",
            "ingress": "5e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "egress": "6e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "service_function_parameters": [
                {
                    "correlation": "value"
                }
            ],
            "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
        }
    
}


exports.portpair_url = portpair_url
exports.portpair_post_json = portpair_post_json
exports.portpair_put_json = portpair_put_json