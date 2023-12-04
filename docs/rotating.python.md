# `rotating` Submodule <a name="`rotating` Submodule" id="@cdktf/provider-time.rotating"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Rotating <a name="Rotating" id="@cdktf/provider-time.rotating.Rotating"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.rotating.Rotating.Initializer"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.Rotating(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rfc3339: str = None,
  rotation_days: typing.Union[int, float] = None,
  rotation_hours: typing.Union[int, float] = None,
  rotation_minutes: typing.Union[int, float] = None,
  rotation_months: typing.Union[int, float] = None,
  rotation_rfc3339: str = None,
  rotation_years: typing.Union[int, float] = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rfc3339">rfc3339</a></code> | <code>str</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationDays">rotation_days</a></code> | <code>typing.Union[int, float]</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationHours">rotation_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMinutes">rotation_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMonths">rotation_months</a></code> | <code>typing.Union[int, float]</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationRfc3339">rotation_rfc3339</a></code> | <code>str</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationYears">rotation_years</a></code> | <code>typing.Union[int, float]</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rfc3339"></a>

- *Type:* str

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rfc3339 Rotating#rfc3339}

---

##### `rotation_days`<sup>Optional</sup> <a name="rotation_days" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationDays"></a>

- *Type:* typing.Union[int, float]

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_days Rotating#rotation_days}

---

##### `rotation_hours`<sup>Optional</sup> <a name="rotation_hours" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationHours"></a>

- *Type:* typing.Union[int, float]

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_hours Rotating#rotation_hours}

---

##### `rotation_minutes`<sup>Optional</sup> <a name="rotation_minutes" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `rotation_months`<sup>Optional</sup> <a name="rotation_months" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMonths"></a>

- *Type:* typing.Union[int, float]

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_months Rotating#rotation_months}

---

##### `rotation_rfc3339`<sup>Optional</sup> <a name="rotation_rfc3339" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationRfc3339"></a>

- *Type:* str

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `rotation_years`<sup>Optional</sup> <a name="rotation_years" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationYears"></a>

- *Type:* typing.Union[int, float]

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_years Rotating#rotation_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#triggers Rotating#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRfc3339">reset_rfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationDays">reset_rotation_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationHours">reset_rotation_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMinutes">reset_rotation_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMonths">reset_rotation_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339">reset_rotation_rfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationYears">reset_rotation_years</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-time.rotating.Rotating.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-time.rotating.Rotating.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-time.rotating.Rotating.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-time.rotating.Rotating.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-time.rotating.Rotating.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-time.rotating.Rotating.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-time.rotating.Rotating.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-time.rotating.Rotating.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-time.rotating.Rotating.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_rfc3339` <a name="reset_rfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRfc3339"></a>

```python
def reset_rfc3339() -> None
```

##### `reset_rotation_days` <a name="reset_rotation_days" id="@cdktf/provider-time.rotating.Rotating.resetRotationDays"></a>

```python
def reset_rotation_days() -> None
```

##### `reset_rotation_hours` <a name="reset_rotation_hours" id="@cdktf/provider-time.rotating.Rotating.resetRotationHours"></a>

```python
def reset_rotation_hours() -> None
```

##### `reset_rotation_minutes` <a name="reset_rotation_minutes" id="@cdktf/provider-time.rotating.Rotating.resetRotationMinutes"></a>

```python
def reset_rotation_minutes() -> None
```

##### `reset_rotation_months` <a name="reset_rotation_months" id="@cdktf/provider-time.rotating.Rotating.resetRotationMonths"></a>

```python
def reset_rotation_months() -> None
```

##### `reset_rotation_rfc3339` <a name="reset_rotation_rfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339"></a>

```python
def reset_rotation_rfc3339() -> None
```

##### `reset_rotation_years` <a name="reset_rotation_years" id="@cdktf/provider-time.rotating.Rotating.resetRotationYears"></a>

```python
def reset_rotation_years() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-time.rotating.Rotating.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-time.rotating.Rotating.isConstruct"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.Rotating.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.Rotating.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.Rotating.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.Rotating.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Rotating to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Rotating that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Rotating to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.second">second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.unix">unix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339Input">rfc3339_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput">rotation_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput">rotation_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput">rotation_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput">rotation_months_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input">rotation_rfc3339_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput">rotation_years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339">rfc3339</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDays">rotation_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHours">rotation_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutes">rotation_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonths">rotation_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339">rotation_rfc3339</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYears">rotation_years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.rotating.Rotating.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-time.rotating.Rotating.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.rotating.Rotating.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-time.rotating.Rotating.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.Rotating.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.Rotating.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.rotating.Rotating.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.rotating.Rotating.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.Rotating.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.Rotating.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.rotating.Rotating.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.rotating.Rotating.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.rotating.Rotating.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.rotating.Rotating.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.rotating.Rotating.property.second"></a>

```python
second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.rotating.Rotating.property.unix"></a>

```python
unix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.rotating.Rotating.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rfc3339_input`<sup>Optional</sup> <a name="rfc3339_input" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339Input"></a>

```python
rfc3339_input: str
```

- *Type:* str

---

##### `rotation_days_input`<sup>Optional</sup> <a name="rotation_days_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput"></a>

```python
rotation_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_hours_input`<sup>Optional</sup> <a name="rotation_hours_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput"></a>

```python
rotation_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_minutes_input`<sup>Optional</sup> <a name="rotation_minutes_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput"></a>

```python
rotation_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_months_input`<sup>Optional</sup> <a name="rotation_months_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput"></a>

```python
rotation_months_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_rfc3339_input`<sup>Optional</sup> <a name="rotation_rfc3339_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input"></a>

```python
rotation_rfc3339_input: str
```

- *Type:* str

---

##### `rotation_years_input`<sup>Optional</sup> <a name="rotation_years_input" id="@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput"></a>

```python
rotation_years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-time.rotating.Rotating.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339"></a>

```python
rfc3339: str
```

- *Type:* str

---

##### `rotation_days`<sup>Required</sup> <a name="rotation_days" id="@cdktf/provider-time.rotating.Rotating.property.rotationDays"></a>

```python
rotation_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_hours`<sup>Required</sup> <a name="rotation_hours" id="@cdktf/provider-time.rotating.Rotating.property.rotationHours"></a>

```python
rotation_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_minutes`<sup>Required</sup> <a name="rotation_minutes" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutes"></a>

```python
rotation_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_months`<sup>Required</sup> <a name="rotation_months" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonths"></a>

```python
rotation_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_rfc3339`<sup>Required</sup> <a name="rotation_rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339"></a>

```python
rotation_rfc3339: str
```

- *Type:* str

---

##### `rotation_years`<sup>Required</sup> <a name="rotation_years" id="@cdktf/provider-time.rotating.Rotating.property.rotationYears"></a>

```python
rotation_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.rotating.Rotating.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.rotating.Rotating.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.rotating.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.rotating.RotatingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_time import rotating

rotating.RotatingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rfc3339: str = None,
  rotation_days: typing.Union[int, float] = None,
  rotation_hours: typing.Union[int, float] = None,
  rotation_minutes: typing.Union[int, float] = None,
  rotation_months: typing.Union[int, float] = None,
  rotation_rfc3339: str = None,
  rotation_years: typing.Union[int, float] = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339">rfc3339</a></code> | <code>str</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays">rotation_days</a></code> | <code>typing.Union[int, float]</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours">rotation_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes">rotation_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths">rotation_months</a></code> | <code>typing.Union[int, float]</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339">rotation_rfc3339</a></code> | <code>str</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears">rotation_years</a></code> | <code>typing.Union[int, float]</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.RotatingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.RotatingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.rotating.RotatingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.RotatingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.RotatingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339"></a>

```python
rfc3339: str
```

- *Type:* str

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rfc3339 Rotating#rfc3339}

---

##### `rotation_days`<sup>Optional</sup> <a name="rotation_days" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays"></a>

```python
rotation_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_days Rotating#rotation_days}

---

##### `rotation_hours`<sup>Optional</sup> <a name="rotation_hours" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours"></a>

```python
rotation_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_hours Rotating#rotation_hours}

---

##### `rotation_minutes`<sup>Optional</sup> <a name="rotation_minutes" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes"></a>

```python
rotation_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `rotation_months`<sup>Optional</sup> <a name="rotation_months" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths"></a>

```python
rotation_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_months Rotating#rotation_months}

---

##### `rotation_rfc3339`<sup>Optional</sup> <a name="rotation_rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339"></a>

```python
rotation_rfc3339: str
```

- *Type:* str

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `rotation_years`<sup>Optional</sup> <a name="rotation_years" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears"></a>

```python
rotation_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#rotation_years Rotating#rotation_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.rotating.RotatingConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.2/docs/resources/rotating#triggers Rotating#triggers}

---



