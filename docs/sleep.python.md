# `time_sleep`

Refer to the Terraform Registory for docs: [`time_sleep`](https://www.terraform.io/docs/providers/time/r/sleep).

# `sleep` Submodule <a name="`sleep` Submodule" id="@cdktf/provider-time.sleep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sleep <a name="Sleep" id="@cdktf/provider-time.sleep.Sleep"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/sleep time_sleep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.sleep.Sleep.Initializer"></a>

```python
from cdktf_cdktf_provider_time import sleep

sleep.Sleep(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_duration: str = None,
  destroy_duration: str = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.createDuration">create_duration</a></code> | <code>str</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.destroyDuration">destroy_duration</a></code> | <code>str</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | (Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_duration`<sup>Optional</sup> <a name="create_duration" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.createDuration"></a>

- *Type:* str

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}

---

##### `destroy_duration`<sup>Optional</sup> <a name="destroy_duration" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.destroyDuration"></a>

- *Type:* str

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.sleep.Sleep.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

(Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetCreateDuration">reset_create_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetDestroyDuration">reset_destroy_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-time.sleep.Sleep.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-time.sleep.Sleep.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.sleep.Sleep.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.sleep.Sleep.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-time.sleep.Sleep.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-time.sleep.Sleep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-time.sleep.Sleep.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-time.sleep.Sleep.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-time.sleep.Sleep.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-time.sleep.Sleep.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-time.sleep.Sleep.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-time.sleep.Sleep.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-time.sleep.Sleep.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.sleep.Sleep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_create_duration` <a name="reset_create_duration" id="@cdktf/provider-time.sleep.Sleep.resetCreateDuration"></a>

```python
def reset_create_duration() -> None
```

##### `reset_destroy_duration` <a name="reset_destroy_duration" id="@cdktf/provider-time.sleep.Sleep.resetDestroyDuration"></a>

```python
def reset_destroy_duration() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-time.sleep.Sleep.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-time.sleep.Sleep.isConstruct"></a>

```python
from cdktf_cdktf_provider_time import sleep

sleep.Sleep.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.sleep.Sleep.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-time.sleep.Sleep.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_time import sleep

sleep.Sleep.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.sleep.Sleep.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-time.sleep.Sleep.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_time import sleep

sleep.Sleep.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.sleep.Sleep.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.createDurationInput">create_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.destroyDurationInput">destroy_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.createDuration">create_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.destroyDuration">destroy_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.sleep.Sleep.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-time.sleep.Sleep.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.sleep.Sleep.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-time.sleep.Sleep.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-time.sleep.Sleep.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-time.sleep.Sleep.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-time.sleep.Sleep.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.sleep.Sleep.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.sleep.Sleep.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.sleep.Sleep.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.sleep.Sleep.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.sleep.Sleep.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.sleep.Sleep.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.sleep.Sleep.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.sleep.Sleep.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `create_duration_input`<sup>Optional</sup> <a name="create_duration_input" id="@cdktf/provider-time.sleep.Sleep.property.createDurationInput"></a>

```python
create_duration_input: str
```

- *Type:* str

---

##### `destroy_duration_input`<sup>Optional</sup> <a name="destroy_duration_input" id="@cdktf/provider-time.sleep.Sleep.property.destroyDurationInput"></a>

```python
destroy_duration_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-time.sleep.Sleep.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_duration`<sup>Required</sup> <a name="create_duration" id="@cdktf/provider-time.sleep.Sleep.property.createDuration"></a>

```python
create_duration: str
```

- *Type:* str

---

##### `destroy_duration`<sup>Required</sup> <a name="destroy_duration" id="@cdktf/provider-time.sleep.Sleep.property.destroyDuration"></a>

```python
destroy_duration: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.sleep.Sleep.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.Sleep.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.sleep.Sleep.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SleepConfig <a name="SleepConfig" id="@cdktf/provider-time.sleep.SleepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.sleep.SleepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_time import sleep

sleep.SleepConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_duration: str = None,
  destroy_duration: str = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.createDuration">create_duration</a></code> | <code>str</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.destroyDuration">destroy_duration</a></code> | <code>str</code> | [Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect. |
| <code><a href="#@cdktf/provider-time.sleep.SleepConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | (Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.sleep.SleepConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.sleep.SleepConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.sleep.SleepConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.sleep.SleepConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.sleep.SleepConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.sleep.SleepConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.sleep.SleepConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_duration`<sup>Optional</sup> <a name="create_duration" id="@cdktf/provider-time.sleep.SleepConfig.property.createDuration"></a>

```python
create_duration: str
```

- *Type:* str

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource creation. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}

---

##### `destroy_duration`<sup>Optional</sup> <a name="destroy_duration" id="@cdktf/provider-time.sleep.SleepConfig.property.destroyDuration"></a>

```python
destroy_duration: str
```

- *Type:* str

[Time duration](https://golang.org/pkg/time/#ParseDuration) to delay resource destroy. For example, `30s` for 30 seconds or `5m` for 5 minutes. Updating this value by itself will not trigger a delay. This value or any updates to it must be successfully applied into the Terraform state before destroying this resource to take effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.sleep.SleepConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

(Optional) Arbitrary map of values that, when changed, will run any creation or destroy delays again.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}

---



