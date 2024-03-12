# `rotating` Submodule <a name="`rotating` Submodule" id="@cdktf/provider-time.rotating"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Rotating <a name="Rotating" id="@cdktf/provider-time.rotating.Rotating"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.rotating.Rotating.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.Rotating;

Rotating.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .rfc3339(java.lang.String)
//  .rotationDays(java.lang.Number)
//  .rotationHours(java.lang.Number)
//  .rotationMinutes(java.lang.Number)
//  .rotationMonths(java.lang.Number)
//  .rotationRfc3339(java.lang.String)
//  .rotationYears(java.lang.Number)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationDays">rotationDays</a></code> | <code>java.lang.Number</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationHours">rotationHours</a></code> | <code>java.lang.Number</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMinutes">rotationMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMonths">rotationMonths</a></code> | <code>java.lang.Number</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationRfc3339">rotationRfc3339</a></code> | <code>java.lang.String</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationYears">rotationYears</a></code> | <code>java.lang.Number</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rfc3339"></a>

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rfc3339 Rotating#rfc3339}

---

##### `rotationDays`<sup>Optional</sup> <a name="rotationDays" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationDays"></a>

- *Type:* java.lang.Number

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_days Rotating#rotation_days}

---

##### `rotationHours`<sup>Optional</sup> <a name="rotationHours" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationHours"></a>

- *Type:* java.lang.Number

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_hours Rotating#rotation_hours}

---

##### `rotationMinutes`<sup>Optional</sup> <a name="rotationMinutes" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMinutes"></a>

- *Type:* java.lang.Number

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `rotationMonths`<sup>Optional</sup> <a name="rotationMonths" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationMonths"></a>

- *Type:* java.lang.Number

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_months Rotating#rotation_months}

---

##### `rotationRfc3339`<sup>Optional</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationRfc3339"></a>

- *Type:* java.lang.String

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `rotationYears`<sup>Optional</sup> <a name="rotationYears" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.rotationYears"></a>

- *Type:* java.lang.Number

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_years Rotating#rotation_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#triggers Rotating#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRfc3339">resetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationDays">resetRotationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationHours">resetRotationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMinutes">resetRotationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMonths">resetRotationMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339">resetRotationRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationYears">resetRotationYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.rotating.Rotating.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.rotating.Rotating.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-time.rotating.Rotating.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.rotating.Rotating.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.rotating.Rotating.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-time.rotating.Rotating.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-time.rotating.Rotating.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-time.rotating.Rotating.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-time.rotating.Rotating.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-time.rotating.Rotating.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRfc3339` <a name="resetRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRfc3339"></a>

```java
public void resetRfc3339()
```

##### `resetRotationDays` <a name="resetRotationDays" id="@cdktf/provider-time.rotating.Rotating.resetRotationDays"></a>

```java
public void resetRotationDays()
```

##### `resetRotationHours` <a name="resetRotationHours" id="@cdktf/provider-time.rotating.Rotating.resetRotationHours"></a>

```java
public void resetRotationHours()
```

##### `resetRotationMinutes` <a name="resetRotationMinutes" id="@cdktf/provider-time.rotating.Rotating.resetRotationMinutes"></a>

```java
public void resetRotationMinutes()
```

##### `resetRotationMonths` <a name="resetRotationMonths" id="@cdktf/provider-time.rotating.Rotating.resetRotationMonths"></a>

```java
public void resetRotationMonths()
```

##### `resetRotationRfc3339` <a name="resetRotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339"></a>

```java
public void resetRotationRfc3339()
```

##### `resetRotationYears` <a name="resetRotationYears" id="@cdktf/provider-time.rotating.Rotating.resetRotationYears"></a>

```java
public void resetRotationYears()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.rotating.Rotating.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.rotating.Rotating.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.Rotating;

Rotating.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.Rotating;

Rotating.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.Rotating;

Rotating.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.Rotating;

Rotating.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Rotating.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Rotating to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Rotating that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Rotating to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.second">second</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.unix">unix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339Input">rfc3339Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput">rotationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput">rotationHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput">rotationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput">rotationMonthsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input">rotationRfc3339Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput">rotationYearsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDays">rotationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHours">rotationHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutes">rotationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonths">rotationMonths</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339">rotationRfc3339</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYears">rotationYears</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.rotating.Rotating.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.rotating.Rotating.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.rotating.Rotating.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.rotating.Rotating.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.Rotating.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.Rotating.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.rotating.Rotating.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.rotating.Rotating.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.Rotating.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.Rotating.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.rotating.Rotating.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.rotating.Rotating.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.rotating.Rotating.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.rotating.Rotating.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.rotating.Rotating.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.rotating.Rotating.property.unix"></a>

```java
public java.lang.Number getUnix();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.rotating.Rotating.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `rfc3339Input`<sup>Optional</sup> <a name="rfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339Input"></a>

```java
public java.lang.String getRfc3339Input();
```

- *Type:* java.lang.String

---

##### `rotationDaysInput`<sup>Optional</sup> <a name="rotationDaysInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput"></a>

```java
public java.lang.Number getRotationDaysInput();
```

- *Type:* java.lang.Number

---

##### `rotationHoursInput`<sup>Optional</sup> <a name="rotationHoursInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput"></a>

```java
public java.lang.Number getRotationHoursInput();
```

- *Type:* java.lang.Number

---

##### `rotationMinutesInput`<sup>Optional</sup> <a name="rotationMinutesInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput"></a>

```java
public java.lang.Number getRotationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `rotationMonthsInput`<sup>Optional</sup> <a name="rotationMonthsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput"></a>

```java
public java.lang.Number getRotationMonthsInput();
```

- *Type:* java.lang.Number

---

##### `rotationRfc3339Input`<sup>Optional</sup> <a name="rotationRfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input"></a>

```java
public java.lang.String getRotationRfc3339Input();
```

- *Type:* java.lang.String

---

##### `rotationYearsInput`<sup>Optional</sup> <a name="rotationYearsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput"></a>

```java
public java.lang.Number getRotationYearsInput();
```

- *Type:* java.lang.Number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.rotating.Rotating.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339"></a>

```java
public java.lang.String getRfc3339();
```

- *Type:* java.lang.String

---

##### `rotationDays`<sup>Required</sup> <a name="rotationDays" id="@cdktf/provider-time.rotating.Rotating.property.rotationDays"></a>

```java
public java.lang.Number getRotationDays();
```

- *Type:* java.lang.Number

---

##### `rotationHours`<sup>Required</sup> <a name="rotationHours" id="@cdktf/provider-time.rotating.Rotating.property.rotationHours"></a>

```java
public java.lang.Number getRotationHours();
```

- *Type:* java.lang.Number

---

##### `rotationMinutes`<sup>Required</sup> <a name="rotationMinutes" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutes"></a>

```java
public java.lang.Number getRotationMinutes();
```

- *Type:* java.lang.Number

---

##### `rotationMonths`<sup>Required</sup> <a name="rotationMonths" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonths"></a>

```java
public java.lang.Number getRotationMonths();
```

- *Type:* java.lang.Number

---

##### `rotationRfc3339`<sup>Required</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339"></a>

```java
public java.lang.String getRotationRfc3339();
```

- *Type:* java.lang.String

---

##### `rotationYears`<sup>Required</sup> <a name="rotationYears" id="@cdktf/provider-time.rotating.Rotating.property.rotationYears"></a>

```java
public java.lang.Number getRotationYears();
```

- *Type:* java.lang.Number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.rotating.Rotating.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.rotating.Rotating.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.rotating.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.rotating.RotatingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.time.rotating.RotatingConfig;

RotatingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .rfc3339(java.lang.String)
//  .rotationDays(java.lang.Number)
//  .rotationHours(java.lang.Number)
//  .rotationMinutes(java.lang.Number)
//  .rotationMonths(java.lang.Number)
//  .rotationRfc3339(java.lang.String)
//  .rotationYears(java.lang.Number)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays">rotationDays</a></code> | <code>java.lang.Number</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours">rotationHours</a></code> | <code>java.lang.Number</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes">rotationMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths">rotationMonths</a></code> | <code>java.lang.Number</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339">rotationRfc3339</a></code> | <code>java.lang.String</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears">rotationYears</a></code> | <code>java.lang.Number</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.rotating.RotatingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.rotating.RotatingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.rotating.RotatingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.RotatingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.rotating.RotatingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rfc3339`<sup>Optional</sup> <a name="rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339"></a>

```java
public java.lang.String getRfc3339();
```

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rfc3339 Rotating#rfc3339}

---

##### `rotationDays`<sup>Optional</sup> <a name="rotationDays" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays"></a>

```java
public java.lang.Number getRotationDays();
```

- *Type:* java.lang.Number

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_days Rotating#rotation_days}

---

##### `rotationHours`<sup>Optional</sup> <a name="rotationHours" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours"></a>

```java
public java.lang.Number getRotationHours();
```

- *Type:* java.lang.Number

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_hours Rotating#rotation_hours}

---

##### `rotationMinutes`<sup>Optional</sup> <a name="rotationMinutes" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes"></a>

```java
public java.lang.Number getRotationMinutes();
```

- *Type:* java.lang.Number

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `rotationMonths`<sup>Optional</sup> <a name="rotationMonths" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths"></a>

```java
public java.lang.Number getRotationMonths();
```

- *Type:* java.lang.Number

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_months Rotating#rotation_months}

---

##### `rotationRfc3339`<sup>Optional</sup> <a name="rotationRfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339"></a>

```java
public java.lang.String getRotationRfc3339();
```

- *Type:* java.lang.String

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `rotationYears`<sup>Optional</sup> <a name="rotationYears" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears"></a>

```java
public java.lang.Number getRotationYears();
```

- *Type:* java.lang.Number

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_years Rotating#rotation_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.rotating.RotatingConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#triggers Rotating#triggers}

---



