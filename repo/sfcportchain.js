var portchain_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/sfc/portchains';
var portchain_post_json = {
    "portchain": {
        "name": "portchain1",
        "port_pair_groups": [
            "4512d643-24fc-4fae-af4b-321c5e2eb3d1",
            "4a634d49-76dc-4fae-af4b-321c5e23d651"
        ],
        "flow_classifiers": [
            "4a334cd4-fe9c-4fae-af4b-321c5e2eb051",
            "105a4b0a-73d6-11e5-b392-2c27d72acb4c"
        ],
        "chain_parameters": [
            {
                "correlation": "value"
            }
        ],
        "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
}


var portchain_put_json = {
        "portchain": {
            "name": "portchain1",
            "port_pair_groups": [
                "4512d643-24fc-4fae-af4b-321c5e2eb3d1",
                "4a634d49-76dc-4fae-af4b-321c5e23d651",
                "4a634d49-76dc-4fae-af4b-321c5e23d652"
            ],
            "flow_classifiers": [
                "4a334cd4-fe9c-4fae-af4b-321c5e2eb051",
                "105a4b0a-73d6-11e5-b392-2c27d72acb4c"
            ],
            "chain_parameters": [
                {
                    "correlation": "value"
                }
            ],
            "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
        }
    
}

exports.portchain_url = portchain_url
exports.portchain_post_json = portchain_post_json
exports.portchain_put_json = portchain_put_json